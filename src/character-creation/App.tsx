import { CreationWizard } from "./CreationWizard";
import { Layout } from "../SharedComponents";
import { PlayerRepositoryContainer } from "../services";
import { Player } from "../Types";

function App() {
  const { saveNew } = PlayerRepositoryContainer.useContainer();
  function savePlayer(player: Player) {
    saveNew(player);
    window.location.replace('/');
  }
  return <CreationWizard savePlayer={savePlayer} />;
}

export default App;
