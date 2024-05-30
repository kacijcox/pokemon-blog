import React from 'react';

function Pokemon({ data }) {
  return (
    <div>
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
    </div>
  );
}

export default Pokemon;