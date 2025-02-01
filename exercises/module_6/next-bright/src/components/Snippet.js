"use client";

import React from "react";

const Snippet = ({ children }) => {
  const [snippetShown, setSnippetShown] = React.useState(false);

  return (
    <>
      {snippetShown ? (
        children
      ) : (
        <div className="reveal">
          <button onClick={() => setSnippetShown(true)}>Reveal Content</button>
        </div>
      )}
    </>
  );
};

export default Snippet;
