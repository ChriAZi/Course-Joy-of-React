"use client";
import React from "react";
import useSound from "use-sound";

import styles from "./DrumMachine.module.css";
import { SoundEnabledContext } from "../../context/SoundContext";

const SOUND_SRC = "/909-drums.mp3";

function DrumMachine() {
  const { soundEnabled } = React.useContext(SoundEnabledContext);
  const [play] = useSound(SOUND_SRC, {
    sprite: {
      kick: [0, 350],
      hihat: [374, 160],
      snare: [666, 290],
      cowbell: [968, 200],
    },
    soundEnabled: soundEnabled,
  });

  return (
    <div className={styles.wrapper}>
      <button onClick={() => play({ id: "kick" })} disabled={!soundEnabled}>
        Kick
      </button>
      <button onClick={() => play({ id: "hihat" })} disabled={!soundEnabled}>
        Hat
      </button>
      <button onClick={() => play({ id: "snare" })} disabled={!soundEnabled}>
        Snare
      </button>
      <button onClick={() => play({ id: "cowbell" })} disabled={!soundEnabled}>
        Cowbell
      </button>
    </div>
  );
}

export default DrumMachine;
