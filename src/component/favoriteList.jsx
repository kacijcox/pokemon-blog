import React from 'react';

const FavoritesList = ({ favorites }) => {
  return (
    <div>
      {favorites.map((pokemon) => (
        <div key={pokemon.name}>
          <img src={pokemon.image} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;