import { departmentsData, playerGauges } from "../Data";
import { PlayerRepositoryContainer } from "../services";
import { Gauge, PlayerGears, SkillLevel } from "../SharedComponents";
import { Entry, Player, PlayerGaugeName } from "../Types";

export function PlayerSheet({ entry }: { entry: Entry<Player> }) {
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
