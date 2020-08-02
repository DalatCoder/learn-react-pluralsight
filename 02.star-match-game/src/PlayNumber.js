import React from 'react';
import colors from './color';

const PlayNumber = props => {
  return (
    <button
      style={{ backgroundColor: colors[props.status] }}
      className="number"
      onClick={() => props.onClick(props.number, props.status)}
    >
      {props.number}
    </button>
  );
};

export default PlayNumber;
