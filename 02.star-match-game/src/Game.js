import React from 'react';
import PlayNumber from './PlayNumber';
import StarsDisplay from './StarsDisplay';
import PlayAgain from './PlayAgain';
import useGameState from './useGameState'

import utils from './utils';

const Game = props => {

  const {
    candidateNums,
    availableNums,
    stars,
    secondsLeft,
    setGameState,
  } = useGameState()

  const candiateAreWrong = utils.sum(candidateNums) > stars;
  const gameStatus =
    availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';

  const getNumberStatus = number => {
    // Check if number is used
    if (!availableNums.includes(number)) {
      return 'used';
    }

    if (candidateNums.includes(number)) {
      return candiateAreWrong ? 'wrong' : 'candidate';
    }

    return 'available';
  };

  const onNumberClick = (number, status) => {
    if (gameStatus !== 'active' || status === 'used') {
      return;
    }

    const newCandidateNums =
      status === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn !== number);

    setGameState(newCandidateNums)
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== 'active' ? (
            <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
          ) : (
            <StarsDisplay count={stars} />
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map(number => (
            <PlayNumber
              key={number}
              number={number}
              status={getNumberStatus(number)}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};

export default Game;
