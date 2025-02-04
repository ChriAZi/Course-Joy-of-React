import React from "react";

import Link from "next/link";

function ScreenSaverExercise() {
  return (
    <ol>
      <li>
        <Link href="/exercises/01-screensaver/rebeccapurple">RebeccaPurple</Link>
      </li>
      <li>
        <Link href="/exercises/01-screensaver/lightcoral">LightCoral</Link>
      </li>
      <li>
        <Link href="/exercises/01-screensaver/mediumseagreen">MediumSeaGreen</Link>
      </li>
      <li>
        <Link href="/exercises/01-screensaver/goldenrod">GoldenRod</Link>
      </li>
    </ol>
  );
}

export default ScreenSaverExercise;
