import React from "react";

import Header from "../components/Header";

import "./styles.css";
import {
  SoundEnabledProvider,
} from "../context/SoundContext";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SoundEnabledProvider>
          <Header />
          {children}
        </SoundEnabledProvider>
        <footer>
          <img src="/ie-badge.gif" width={100} />
          <span>Thanks for visiting!</span>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
