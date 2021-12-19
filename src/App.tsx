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
      {mode == "wizard" ? <CreationWizard savePlayer={savePlayer} /> : null}
      {mode == "display" && player != null ? <PlayerSheet player={player} /> : null}
    </div>
  );
}

export default App;
