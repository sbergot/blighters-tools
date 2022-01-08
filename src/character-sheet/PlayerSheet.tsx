import { playerGauges } from "../Data";
import { PlayerRepositoryContainer } from "../services";
import { Gauge, SkillLevel } from "../SharedComponents";
import { Entry, Player, PlayerGaugeName } from "../Types";

export function PlayerSheet({ entry }: { entry: Entry<Player> }) {
  const { update } = PlayerRepositoryContainer.useContainer();
  const player = entry.value;

  function setGauge(name: PlayerGaugeName, value: number) {
    const newValue = value == player.gauges[name] ? 0 : value;
    const newEntry = {
      ...entry,
      value: { ...player, gauges: { ...player.gauges, [name]: newValue } },
    };
    update(newEntry);
  }

  return (
    <div>
      <p className="font-bold text-xl">
        {player.firstname} {player.lastname}
      </p>
      <p className="text-lg">
        {player.department} {player.role}
      </p>
      <div className="flex">
        <div className="grid grid-cols-2fc">
          {Object.entries(player.skills).map(([name, value]) => {
            return (
              <>
                <div>{name}</div>
                <SkillLevel level={value} />
              </>
            );
          })}
        </div>
        <div className="flex ml-8">
          {playerGauges.map((name) => {
            return <Gauge name={name} state={[player.gauges[name], (i: number) => setGauge(name, i+1)]} />;
          })}
        </div>
      </div>
      <div>
        <div className="font-bold">Gears</div>
        {player.gears.map((g) => (
          <div>{g.name}</div>
        ))}
      </div>
    </div>
  );
}
