import axios from 'axios';

const API_URL = '(https://pokeapi.co/api/v2/language/9/)';

const getRandomPokemon = async () => {
  const randomId = Math.floor(Math.random() * 898) + 1;
  const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/?language=en`);
  const abilityId = pokemonResponse.data.abilities[0].ability.url.split('/')[6];
  const abilityResponse = await axios.get(`https://pokeapi.co/api/v2/ability/${abilityId}/?language=en`);
  const characteristicId = pokemonResponse.data.characteristics[0].characteristic.url.split('/')[6];
  const characteristicResponse = await axios.get(`https://pokeapi.co/api/v2/characteristic/${characteristicId}/`);

  return {
    pokemon: pokemonResponse.data,
    ability: abilityResponse.data,
    characteristic: characteristicResponse.data,
  };
};

export { getRandomPokemon };