import React from 'react';

const Characteristics  = ({ data }) => {
  return (
    <div>
      <h3>Characteristics:</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default Characteristics;