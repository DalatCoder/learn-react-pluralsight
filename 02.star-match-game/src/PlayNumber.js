import React from 'react';
import colors from './color';

const PlayNumber = props => {
  return (
    <button
      style={{ backgroundColor: colors[props.status] }}
      className="number"
    >
      {props.number}
    </button>
  );
};

export default PlayNumber;
