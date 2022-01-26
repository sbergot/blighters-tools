import { PlayerSheet } from "./PlayerSheet";
import { PlayerRepositoryContainer } from "../services";
import { useState } from "react";

function App() {
  const { getEntries, deleteEntry } = PlayerRepositoryContainer.useContainer();
  const [editable, setEditable] = useState(false);
  const characterId = new URL(document.location as any).searchParams.get(
    "character"
  );
  if (characterId == null) {
    return <p>no id provided</p>;
  }

  const player = getEntries()[characterId];
  if (!player) {
    return <p>character not found: {characterId}</p>;
  }

  function onDelete() {
    deleteEntry(player);
    window.location.replace("/");
  }

  return (
    <>
      <button className="btn btn--primary" onClick={onDelete}>
        Delete character
      </button>
      <button className="btn btn--primary ml-2" onClick={() => setEditable(e => !e)}>
        {editable ? 'save' : 'edit'}
      </button>
      <PlayerSheet entry={player} editable={editable} />
    </>
  );
}

export default App;
