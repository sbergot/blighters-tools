import { PlayerRepositoryContainer } from "./services";

function App() {
  const { getEntries } = PlayerRepositoryContainer.useContainer();
  const entries = Object.values(getEntries());

  return (
    <>
    <a href="/character-creation/">
      New character
    </a>
    <ul>
      {entries.map((e) => (
        <li key={e.id}><a href={`/character-sheet/?character=${e.id}`}>
          {e.value.firstname} {e.value.lastname}
          </a></li>
      ))}
    </ul>
    </>
  );
}

export default App;
