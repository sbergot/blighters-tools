import { useState } from "react";
import { CreationWizard } from "./CreationWizard";
import { PlayerSheet } from "./PlayerSheet";
import { Player } from "./Types";

type Mode = "wizard" | "display";

function App() {
  const [mode, setMode] = useState<Mode>("wizard");
  const [player, setPlayer] = useState<Player | null>(null);

  function savePlayer(p: Player) {
    setPlayer(p);
    setMode("display");
  }

  return (
    <div className="p-4 mx-auto max-w-2xl">
      <h1 className="text-6xl">Blighters creation tool</h1>
      <h2>Blighters is a tabletop rpg by Chris McDowall</h2>
      <a className="text-orange-700" href="https://www.bastionland.com/">
        https://www.bastionland.com/
      </a>
      <div className="mt-4">
        {mode == "wizard" ? <CreationWizard savePlayer={savePlayer} /> : null}
        {mode == "display" && player != null ? (
          <PlayerSheet player={player} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
