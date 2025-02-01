import React from 'react';

import Guess from '../Guess';
import { range } from '../../utils';

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, 6).map((num) => (
        <Guess key={num} value={guesses[num]} answer={answer}></Guess>
      ))}
    </div>
  );
}

export default GuessResults;
