import React from 'react';

function Banner({ variant, numberOfTries, answer }) {
  const bannerContent =
    variant === 'happy' ? (
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numberOfTries} guesses</strong>.
      </p>
    ) : (
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    );

  return <div className={`banner ${variant}`}>{bannerContent}</div>;
}

export default Banner;
