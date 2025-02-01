import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({ guesses, setGuesses, gameState, setGameState, answer }) {
  const [currentGuess, setCurrentGuess] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextGuesses = [...guesses];
    nextGuesses.push(currentGuess);
    setGuesses(nextGuesses);
    if (currentGuess === answer) {
      const nextGameState = {
        finished: true,
        variant: 'happy',
      };
      setGameState(nextGameState);
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      const nextGameState = {
        finished: true,
        variant: 'sad',
      };
      setGameState(nextGameState);
    }
    setCurrentGuess('');
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess</label>
      <input
        id="guess-input"
        type="text"
        required
        pattern="[A-Za-z]{5}"
        title="5 Letter word"
        maxLength={5}
        value={currentGuess}
        onChange={(event) => setCurrentGuess(event.target.value.toUpperCase())}
        disabled={gameState.finished}
      />
    </form>
  );
}

export default GuessInput;
