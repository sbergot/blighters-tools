import { PlayerSheet } from "../PlayerSheet";
import { PlayerRepositoryContainer } from "../services";

function App() {
  const { getEntries } = PlayerRepositoryContainer.useContainer();
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

  return <PlayerSheet player={player.value} />;
}

export default App;
