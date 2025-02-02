"use client";

import React, { createContext, useState } from "react";

export const SoundEnabledContext = createContext();

export const SoundEnabledProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <SoundEnabledContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundEnabledContext.Provider>
  );
};
