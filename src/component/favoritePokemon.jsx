import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import FavoritesList from './FavoritesList';

const FavoritePokemon = () => {
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = (pokemon) => {
    setFavorites((prevFavorites) => [...prevFavorites, { name: pokemon.name, image: pokemon.sprites.front_default }]);
  };

  return (
    <div>
      <FavoritesList favorites={favorites} />
      <CharacterCard onFavorite={handleFavorite} />
    </div>
  );
};

export default FavoritePokemon;