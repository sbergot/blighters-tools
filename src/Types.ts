export type SkillName =
  | "data"
  | "deception"
  | "empathy"
  | "force"
  | "hardware"
  | "influence"
  | "movement"
  | "software";

export type DepartmentName =
  | "corporate"
  | "union"
  | "naval"
  | "council"
  | "android"
  | "geno";

export type RoleName =
  | "soldier"
  | "researcher"
  | "operator"
  | "engineer"
  | "advisor"
  | "pioneer";

export type Skill = number;

export interface Player {
  firstname: string;
  lastname: string;
  department: DepartmentName;
  role: RoleName;
  skills: SkillSet;
  gears: Gear[];
  randomThing: Gear;
  gauges: PlayerGauges;
}

export interface Team {
  players: Player[];
  gauges: TeamGauge;
}

export type SkillSet = Record<SkillName, Skill>;

export interface Element {
  name: string;
  description?: string;
}

export interface Gear extends Element {
  options?: string[];
}

export type Gauge = number;

export interface PlayerGauges {
  hurt: Gauge;
  stress: Gauge;
}

export interface TeamGauge {
  heat: Gauge;
  cost: Gauge;
}

export interface Naming {
  trick: string;
  exemples: string[];
}

export interface RandomThing {
  prob: number;
  description: string;
}

export interface DepartementData {
  skills: SkillName[];
  summary: string;
  description: string;
  instinct: Element;
  random_things: RandomThing[];
  naming: {
    forenames: Naming[];
    surname: Naming[];
  };
  perRole: Record<RoleName, { gears: Gear[] }>;
}

export interface RoleData {
  skills: SkillName[];
  summary: string;
}
