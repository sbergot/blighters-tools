import { useState } from "react";
import { createContainer } from "unstated-next";
import { Entry, Player, Repository } from "./Types";

function uuidv4(): string {
  return (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(
    /[018]/g,
    (c: any) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
  );
}

export function createRepository<T>(key: string) {
  function loadRepo(): Repository<T> {
    const dbstring = localStorage[key];
    return dbstring ? JSON.parse(dbstring) : {};
  }

  function useRepository() {
    const [stateRepo, setStateRepo] = useState<Repository<T>>(loadRepo());

    function setRepo(setter: (r: Repository<T>) => Repository<T>) {
      const repo = loadRepo();
      const newRepo = setter(repo);
      setStateRepo(newRepo);
      localStorage[key] = JSON.stringify(newRepo);
    }

    function saveNew(newVal: T) {
      const newId = uuidv4();
      setRepo((repo) => ({ ...repo, [newId]: { id: newId, value: newVal } }));
    }

    function update(entry: Entry<T>) {
      const id = entry.id;
      setRepo((repo) => ({ ...repo, [id]: entry }));
    }

    function deleteEntry(entry: Entry<T>) {
      setRepo((repo) => {
        const newRepo = { ...repo };
        delete newRepo[entry.id];
        return newRepo;
      });
    }

    function getEntries() {
      return loadRepo();
    }

    return { saveNew, update, deleteEntry, getEntries };
  }
  return useRepository;
}

const usePlayerRepository = createRepository<Player>("player");
export const PlayerRepositoryContainer = createContainer(usePlayerRepository);
