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

export interface Gear extends Element {}

export type Gauge = number;

export interface PlayerGauges {
  hurt: Gauge;
  stress: Gauge;
}

export interface TeamGauge {
  heat: Gauge;
  cost: Gauge;
}
