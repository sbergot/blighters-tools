import { useState } from "react";
import { departmentsData, rolesData, skillNames } from "./Data";
import { GeneratePlayer, InitSkills } from "./PlayerGenerator";
import { Button, SkillLevel, Step } from "./SharedComponents";
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

  const uniqueGear = departData.perRole[role].gears;

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
  const rerollBtn = <Button onClick={reroll}>reroll</Button>;

  const resetSkillsBtn = (
    <Button onClick={resetSkills} disabled={remainingSkillPoints == 2}>
      reset skills
    </Button>
  );

  function onSavePlayer() {
    const newPlayer = { ...player, gears: [...player.gears, ...uniqueGear] };
    savePlayer(newPlayer);
  }

  const saveCharBtn = (
    <Button onClick={onSavePlayer} disabled={!skillsOk || !namingOk}>
      Save character
    </Button>
  );
  return (
    <div>
      <Step title="Department & Role" headerChildren={rerollBtn}>
        <p>
          Your department is "{department}". {departData.summary} You get one
          point in {departData.skills[0]} and {departData.skills[1]}.
        </p>
        <p className="mt-2">
          Instinct (applies when your Stress Gauge is full )
        </p>
        <p>{departData.instinct}</p>
        <p className="mt-2">
          Your past role is "{role}". {rData.summary} You get one point in{" "}
          {rData.skills[0]} and {rData.skills[1]}.
        </p>
        <p className="mt-2">
          You get the following unique gears:
          <ul className="list-disc list-inside">
            {uniqueGear.map((g) => (
              <li>{g.name}</li>
            ))}
          </ul>
        </p>
      </Step>
      <Step title="Skills" headerChildren={resetSkillsBtn}>
        <p>
          {!skillsOk
            ? `Please assign ${remainingSkillPoints} additional skill point${
                remainingSkillPoints == 2 ? "s" : ""
              }.`
            : "All skill points assigned."}
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
      </Step>
      <Step title="Name" headerChildren={saveCharBtn}>
        <div>
          <div className="mb-4">
            <p>Please choose a forename and a surname.</p>
            <p>Forenames:</p>
            <ul className="list-disc list-inside">
              {departData.naming.forenames.map((t) => (
                <li>{t}</li>
              ))}
            </ul>
            <input
              className="border border-black my-2 p-1"
              value={player.firstname}
              onChange={(e) => setForename(e.currentTarget.value)}
            />
          </div>
          <p>Surname:</p>
          <ul className="list-disc list-inside">
            {departData.naming.surname.map((t) => (
              <li>{t}</li>
            ))}
          </ul>
          <input
            className="border border-black my-2 p-1"
            value={player.lastname}
            onChange={(e) => setSurname(e.currentTarget.value)}
          />
        </div>
      </Step>
    </div>
  );
}
