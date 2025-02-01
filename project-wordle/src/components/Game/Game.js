import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';

import GuessResults from '../GuessResults';
import Banner from '../Banner';
import Keyboard from '../Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState({
    finished: false,
    variant: undefined,
  });

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        gameState={gameState}
        setGameState={setGameState}
        answer={answer}
      />
      <Keyboard guesses={guesses} answer={answer} />
      {gameState.finished && gameState.variant && (
        <Banner
          variant={gameState.variant}
          answer={answer}
          numberOfTries={guesses.length}
        ></Banner>
      )}
    </>
  );
}

export default Game;
