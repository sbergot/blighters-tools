import { DepartmentName, RoleName, SkillName } from "./Types";

export const skillData: Record<SkillName, {}> = {
  data: {},
  deception: {},
  empathy: {},
  force: {},
  hardware: {},
  influence: {},
  movement: {},
  software: {},
};

interface DepartementData {
  skills: SkillName[];
  naming: {
    forenames: string[];
    surname: string[];
  };
}

export const departmentsData: Record<DepartmentName, DepartementData> = {
  corporate: {
    skills: ["deception", "influence"],
    naming: {
      forenames: [
        "Two letters spelled phonetically (Aybee, Wyar)",
        "A fancy colour (Ochre, Sepia)",
      ],
      surname: [
        "A city behind a surname prefix (Van Paris, O’Lahore)",
        "Compound of a positive adjective and noun (Brightpath, Clearbar)",
      ],
    },
  },
  union: {
    skills: ["empathy", "force"],
    naming: {
      forenames: [
        "An animal, or shortened version (Gull, Roo)",
        "Common modern surname (Smith, Martinez)",
      ],
      surname: [
        "A moon or star (Antares, Miranda)",
        "Shortened colony name (Briggton, Fortvega)",
      ],
    },
  },
  naval: {
    skills: ["force", "hardware"],
    naming: {
      forenames: [
        "An affectionate nickname (Chopper, Ace)",
        "An insulting nickname (Squirt, Grunt)",
      ],
      surname: [
        "Bodypart descriptor (Surehand, Firehead)",
        "Dress descriptor (Redsash, Cloaker)",
      ],
    },
  },
  council: {
    skills: ["influence", "software"],
    naming: {
      forenames: [
        "A traditional virtue (Temperance, Serenity)",
        "A prestigious animal (Dove, Lion)",
      ],
      surname: [
        "A building material (Slate, Pine)",
        "An outdated profession (Fletcher, Miller)",
      ],
    },
  },
  android: {
    skills: ["data", "software"],
    naming: {
      forenames: [
        "Nature noun (Leaf, River)",
        "Extended phonetic version of a letter (Beeb, Esso, Ellie)",
      ],
      surname: [
        "Two numbers (9-2, 1-14)",
        "An old computer function or part (Write, Valve)",
      ],
    },
  },
  geno: {
    skills: ["deception", "movement"],
    naming: {
      forenames: [
        "An action verb (Dash, Spike)",
      ],
      surname: [
        "Mangled latin animal family/genus (Pantero, Canis, Ursida)",
        "Shortened version of a chemical element (Alumi, Titan, Cyan)",
      ],
    },
  },
};

export const rolesData: Record<RoleName, { skills: SkillName[] }> = {
  soldier: {
    skills: ["force", "movement"],
  },
  researcher: {
    skills: ["data", "empathy"],
  },
  operator: {
    skills: ["deception", "software"],
  },
  engineer: {
    skills: ["data", "hardware"],
  },
  advisor: {
    skills: ["empathy", "influence"],
  },
  pioneer: {
    skills: ["hardware", "movement"],
  },
};

export const departments: DepartmentName[] = [
  "corporate",
  "union",
  "naval",
  "council",
  "android",
  "geno",
];

export const roles: RoleName[] = [
  "soldier",
  "researcher",
  "operator",
  "engineer",
  "advisor",
  "pioneer",
];

export const skillNames: SkillName[] = [
  "data",
  "deception",
  "empathy",
  "force",
  "hardware",
  "influence",
  "movement",
  "software",
];
