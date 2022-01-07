import { departments, departmentsData, roles, rolesData } from "./Data";
import { Gear, Player, RandomThing } from "./Types";

function randomInt(max: number): number {
  return Math.floor(Math.random() * max) + 1;
}

function pickRandom<T>(list: T[]): T {
  return list[randomInt(list.length) - 1];
}

function pickRandomThing(things: RandomThing[]): Gear {
  const dices = 10 * randomInt(6) + randomInt(6);
  for (const thing of things) {
    if (dices >= thing.prob) {
      return { name: thing.description };
    }
  }
  throw { message: "could not find thing" };
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
    gears: [],
    randomThing: { name: "" },
  };
  InitSkills(player);
  initGears(player);
  return player;
}

function initGears(player: Player) {
  player.gears = [{ name: "hand tool" }, { name: "handheld device" }];
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

export function InitRandomThing(player: Player) {
  const thingTable = departmentsData[player.department].random_things;
  player.randomThing = pickRandomThing(thingTable);
}
