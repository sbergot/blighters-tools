import { PlayerRepositoryContainer } from "./services";

function App() {
  const { getEntries } = PlayerRepositoryContainer.useContainer();
  const entries = Object.values(getEntries());

  return (
    <>
      <a href="/character-creation/" className="btn btn--primary">
        New character
      </a>
      <ul className="mt-4">
        {entries.map((e) => (
          <li key={e.id} className="list-inside list-disc">
            <a className="link" href={`/character-sheet/?character=${e.id}`}>
              {e.value.firstname} {e.value.lastname}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
