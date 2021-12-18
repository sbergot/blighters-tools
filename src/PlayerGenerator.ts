import { departments, departmentsData, roles, rolesData } from "./Data";
import { Player } from "./Types";

function pickRandom<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

export function GeneratePlayer(): Player {
  const department = pickRandom(departments);
  const role = pickRandom(roles);
  const player: Player = {
    firstname: "",
    lastname: "",
    department: department,
    role: role,
    skills: {
      data: 0,
      deception: 0,
      empathy: 0,
      force: 0,
      hardware: 0,
      influence: 0,
      movement: 0,
      software: 0,
    },
    gauges: {
      hurt: 0,
      stress: 0,
    },
    gears: [{ name: "hand tool" }, { name: "handheld device" }],
  };
  InitSkills(player);
  return player;
}

export function InitSkills(player: Player) {
  const { role, department } = player;
  departmentsData[department].skills.forEach((skill) => {
    player.skills[skill] += 1;
  });
  rolesData[role].skills.forEach((skill) => {
    player.skills[skill] += 1;
  });
}
