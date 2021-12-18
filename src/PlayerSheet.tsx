import { Gauge, SkillLevel } from "./SharedComponents";
import { Player } from "./Types";

export function PlayerSheet({ player }: { player: Player }) {
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
        <div className="flex ml-4">
          {Object.entries(player.gauges).map(([name, value]) => {
            return <Gauge name={name} value={value} />;
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
