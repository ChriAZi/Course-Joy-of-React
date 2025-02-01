import React from 'react';
import { CHARACTERS } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Key({ letter, status }) {
  console.log(status);
  return (
    <p className={`keyboard-key ${status ? status : ''}`}>
      {letter.toUpperCase()}
    </p>
  );
}

function Keyboard({ guesses, answer }) {
  guesses.forEach((guess) => {
    const checkedGuess = checkGuess(guess, answer);

    if (checkedGuess) {
      const checkedLetters = new Map(
        checkedGuess.map((result) => [
          result.letter.toLowerCase(),
          result.status,
        ])
      );

      CHARACTERS.forEach((character) => {
        if (checkedLetters.has(character.letter.toLowerCase())) {
          character.status = checkedLetters.get(character.letter.toLowerCase());
        }
      });
    }
  });

  console.log(CHARACTERS);

  const firstRow = [...CHARACTERS].slice(0, 10);
  const secondRow = [...CHARACTERS].slice(10, 19);
  const thirdRow = [...CHARACTERS].slice(19, 26);

  return (
    <div className="keyboard-wrapper">
      <div className="keyboard-row first-row">
        {firstRow.map((item, index) => (
          <Key key={index} letter={item.letter} status={item.status} />
        ))}
      </div>
      <div className="keyboard-row second-row">
        {secondRow.map((item, index) => (
          <Key key={index} letter={item.letter} status={item.status} />
        ))}
      </div>
      <div className="keyboard-row third-row">
        {thirdRow.map((item, index) => (
          <Key key={index} letter={item.letter} status={item.status} />
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
