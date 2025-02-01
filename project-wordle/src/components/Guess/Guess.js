import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const checkedGuess = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(0, 5).map((num) => (
        <span
          className={`cell ${
            checkedGuess && checkedGuess[num] ? checkedGuess[num].status : ''
          }`}
          key={num}
        >
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
