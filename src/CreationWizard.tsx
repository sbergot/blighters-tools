import { useState } from "react";
import { departmentsData, rolesData, skillNames } from "./Data";
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
  const departData = departmentsData[department];
  const rData = rolesData[role];

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
      <button onClick={reroll}>reroll all</button>
      <p>
        Your department is "{department}". {departData.summary}
      </p>
      <p>
        You get one point in {departData.skills[0]} and {departData.skills[1]}.
      </p>
      <p>
        Instinct (applies when your Stress Gauge is full ) -{" "}
        {departData.instinct}
      </p>
      <p>
        Your past role is "{role}". {rData.summary}
      </p>
      <p>
        You get one point in {rData.skills[0]} and {rData.skills[1]}.
      </p>
      <p>
        {!skillsOk ? `Please assign ${remainingSkillPoints} additional skill point${remainingSkillPoints == 2 ? "s" : ""}.` : ""}
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
          {departData.naming.forenames.map((t) => (
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
          {departData.naming.surname.map((t) => (
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
