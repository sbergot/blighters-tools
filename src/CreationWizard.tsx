import { useState } from "react";
import { departmentsData, skillNames } from "./Data";
import { GeneratePlayer, InitSkills } from "./PlayerGenerator";
import { SkillLevel } from "./SharedComponents";
import { Player, SkillName } from "./Types";

const additionalSkills = 2;

export function CreationWizard({
  savePlayer,
}: {
  savePlayer: (player: Player) => void;
}) {
  const [player, setPlayer] = useState<Player>(GeneratePlayer());
  const [remainingSkillPoints, setRemainingSkillPoints] =
    useState(additionalSkills);
  const { department, role } = player;

  function addSkill(skillName: SkillName) {
    setRemainingSkillPoints((p) => p - 1);
    setPlayer({
      ...player,
      skills: { ...player.skills, [skillName]: player.skills[skillName] + 1 },
    });
  }

  function resetSkills() {
    const newPlayer: Player = { ...player, skills: { ...player.skills } };
    skillNames.forEach((skill) => {
      newPlayer.skills[skill] = 0;
    });
    InitSkills(newPlayer);
    setPlayer(newPlayer);
    setRemainingSkillPoints(additionalSkills);
  }

  function reroll() {
    setPlayer(GeneratePlayer());
    setRemainingSkillPoints(additionalSkills);
  }

  function setForename(forename: string) {
    setPlayer({
      ...player,
      firstname: forename,
    });
  }

  function setSurname(surname: string) {
    setPlayer({
      ...player,
      lastname: surname,
    });
  }

  const skillsOk = remainingSkillPoints == 0;
  const namingOk = player.firstname != "" && player.lastname != "";

  const colClass = !skillsOk ? "grid-cols-3fc" : "grid-cols-2fc";
  return (
    <div>
      <p>
        You are a {department} {role}.
      </p>
      <button onClick={reroll}>reroll</button>
      <p>
        Here are your starting skills.{" "}
        {!skillsOk ? `Please assign ${remainingSkillPoints} skill points.` : ""}
        {skillsOk ? <button onClick={resetSkills}>reset skills</button> : null}
      </p>
      <div className={`grid ${colClass}`}>
        {skillNames.map((name) => {
          return (
            <>
              <div>{name}</div>
              <SkillLevel level={player.skills[name]} />
              {!skillsOk ? (
                <button onClick={() => addSkill(name)}>+</button>
              ) : null}
            </>
          );
        })}
      </div>
      <div>
        <p>Please choose a forename and a surname.</p>
        <p>Forenames:</p>
        <ul className="list-disc list-inside">
          {departmentsData[department].naming.forenames.map((t) => (
            <li>{t}</li>
          ))}
        </ul>
        <input
          className="border"
          value={player.firstname}
          onChange={(e) => setForename(e.currentTarget.value)}
        />
        <p>Surname:</p>
        <ul className="list-disc list-inside">
          {departmentsData[department].naming.surname.map((t) => (
            <li>{t}</li>
          ))}
        </ul>
        <input
          className="border"
          value={player.lastname}
          onChange={(e) => setSurname(e.currentTarget.value)}
        />
      </div>
      {skillsOk && namingOk ? (
        <button onClick={() => savePlayer(player)}>Save character</button>
      ) : null}
    </div>
  );
}
