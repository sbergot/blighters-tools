import { departmentsData, playerGauges } from "../Data";
import { PlayerRepositoryContainer } from "../services";
import { Gauge, PlayerGears, SkillLevel, SkillList } from "../SharedComponents";
import { Entry, Player, PlayerGaugeName, SkillName } from "../Types";

export function PlayerSheet({ entry, editable }: { entry: Entry<Player>; editable:boolean }) {
  const { update } = PlayerRepositoryContainer.useContainer();
  const player = entry.value;
  const departData = departmentsData[player.department];

  function setGauge(name: PlayerGaugeName, value: number) {
    const newValue = value == player.gauges[name] ? 0 : value;
    const newEntry = {
      ...entry,
      value: { ...player, gauges: { ...player.gauges, [name]: newValue } },
    };
    update(newEntry);
  }

  function addSkill(skillName: SkillName) {
    const newPlayer = {
      ...player,
      skills: { ...player.skills, [skillName]: Math.min(player.skills[skillName] + 1, 4) },
    };
    update({...entry, value: newPlayer});
  }

  function removeSkill(skillName: SkillName) {
    const newPlayer = {
      ...player,
      skills: { ...player.skills, [skillName]: Math.max(player.skills[skillName] - 1, 0) },
    };
    update({...entry, value: newPlayer});
  }

  return (
    <div>
      <p className="font-bold text-xl">
        {player.firstname} {player.lastname}
      </p>
      <p className="text-lg">
        {player.department} {player.role}
      </p>
      <p className="mt-2">Instinct (applies when your Stress Gauge is full)</p>
      <p>
        <span className="font-bold">{departData.instinct.name}</span>:{" "}
        {departData.instinct.description}
      </p>
      <div className="flex mt-4">
        <SkillList  skills={player.skills} editable={editable} addSkill={addSkill} removeSkill={removeSkill} />
        <div className="flex ml-8">
          {playerGauges.map((name) => {
            return (
              <Gauge
                name={name}
                state={[
                  player.gauges[name],
                  (i: number) => setGauge(name, i + 1),
                ]}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-4">
        <div className="font-bold">Gears</div>
        <PlayerGears gears={player.gears} />
      </div>
    </div>
  );
}
