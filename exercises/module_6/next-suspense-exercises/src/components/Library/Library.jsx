import LibraryGameCard from "@/components/LibraryGameCard";
import React from "react";
import { range } from "@/utils";
import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";

function Library({ games, isPlaceholder = false }) {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
        {!isPlaceholder && (
          <p>
            <span className="num-of-games">{games.length}</span> games in
            library
          </p>
        )}
      </header>
      <div className="game-grid">
        {isPlaceholder
          ? range(0, 12).map((num) => <LibraryGameCardSkeleton key={num}/>)
          : games.map((game) => (
              <LibraryGameCard key={game.slug} game={game} />
            ))}
      </div>
    </section>
  );
}

export default Library;
