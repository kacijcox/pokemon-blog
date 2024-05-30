import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './character.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FavoritesList from './favoriteList';

const CharacterCard = () => {
  const [pokemon, setPokemon] = useState(null);
  const [ability, setAbility] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); 

  const onFavorite = (pokemon) => {
    
  };

  const handleGenerateNewPokemon = async () => {
    const { pokemon, ability } = await getRandomPokemon();
    setPokemon(pokemon);
    setAbility(ability);
  };

  useEffect(() => {
    getRandomPokemon().then((data) => {
      if (data) {
        setPokemon(data.pokemon);
        setAbility(data.ability);
      }
    });
  }, []);

  const getRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 898) + 1;
    const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/?language=en`);
    const abilityId = pokemonResponse.data.abilities[0].ability.url.split('/')[6];
    const abilityResponse = await axios.get(`https://pokeapi.co/api/v2/ability/${abilityId}/?language=en`);

    const handleFavorite = (pokemon) => {
    };
  
    return {
      pokemon: pokemonResponse.data,
      ability: abilityResponse.data,
    };
  };



  return (
    <div>
      {pokemon && (
      <div className='characters mt-5'>
      <div className='row'>
        <div className='col-12'>
          <h2 className='pokemon-name'>{pokemon.name}</h2>
        </div>
      </div>
      <div class="cube"></div>
      <div className='row'>
        <div className='col-6'>
          <img className='pokemon-image' src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className='col-6'>
          <div className='row'>
            <div className='col-12'>
              <p className='pokemon-type'>Type: {pokemon.types[0].type.name}</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <p className='pokemon-ability'>Ability: {ability.name}</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <p className='pokemon-description'>Description: {ability.effect_entries[0].effect}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      )}
      <div class="flex-box mt-4">
      <button className='generate-button' onClick={handleGenerateNewPokemon}>Generate Pokémon</button>
      <button className='favorite-button' onClick={() => onFavorite(pokemon)}>Favorite</button>
      </div>
    </div>

    

    
  );
  
};



export default CharacterCard;

