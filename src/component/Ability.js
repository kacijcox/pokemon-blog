import React from 'react';

function Ability({ data }) {
  return (
    <div>
      <h2>Ability: {data.name}</h2>
      <p>Description: {data.effect_entries[0].short_effect}</p>
    </div>
  );
}

export default Ability;