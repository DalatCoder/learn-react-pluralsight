import React from 'react';

const PlayAgain = props => {
  return (
    <div 
      className="game-done"
      style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
    >
    <div className="message">
      { props.gameStatus === 'lost' ? 'Game Over' : 'Nice' }
    </div>
      <button onClick={props.onClick}>Play Again</button>
    </div>
  );
};

export default PlayAgain;
