import React from "react";

import { readFile, writeFile } from "../helpers/file-helpers";
import HitCounter from "../components/HitCounter";

const DATABASE_PATH = "/src/database.json";
export const dynamic = "force-dynamic";

function Home() {
  let { hits } = JSON.parse(readFile(DATABASE_PATH));
  hits += 1;
  writeFile(DATABASE_PATH, JSON.stringify({ hits }));

  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number <HitCounter hits={hits} />
      </p>
    </main>
  );
}

export default Home;
