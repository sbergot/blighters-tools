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
  summary: string;
  instinct: string;
  naming: {
    forenames: string[];
    surname: string[];
  };
}

export const departmentsData: Record<DepartmentName, DepartementData> = {
  corporate: {
    skills: ["deception", "influence"],
    summary: "Part of the capitalist machine that owns most of Earth and its orbit.",
    instinct: "PARANOIA: Danger Rolls you make with allies present are Skill 0.",
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
    summary: "Communities of workers fighting their cause.",
    instinct: "DEPENDENCY: Danger Rolls you attempt on your own are Skill 0.",
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
    summary: "Private military fleets for hire.",
    instinct: "HOSTILITY: All Danger Rolls other than attacks are Skill 0.",
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
    summary: "Chambers of mediators and lawmakers.",
    instinct: "CONTROL: List a three-action plan. Rolls outside the plan are Skill 0.",
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
    summary: "Mechanical beings free from their service.",
    instinct: "OBSESSION: The GM puts a question in your head. Until resolved, rolls unrelated to finding the answer are Skill 0",
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
    summary: "Genetically Engineered Organisms taking humanity beyond its limits.",
    instinct: "FEAR: Any actions in the view of a non-Ally are Skill 0.",
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

export const rolesData: Record<RoleName, { skills: SkillName[], summary: string }> = {
  soldier: {
    skills: ["force", "movement"],
    summary: "You fought for something.",
  },
  researcher: {
    skills: ["data", "empathy"],
    summary: "You strived for knowledge.",
  },
  operator: {
    skills: ["deception", "software"],
    summary: "You navigated networks and systems.",
  },
  engineer: {
    skills: ["data", "hardware"],
    summary: "You kept things working.",
  },
  advisor: {
    skills: ["empathy", "influence"],
    summary: "You guided people to make the right decision.",
  },
  pioneer: {
    skills: ["hardware", "movement"],
    summary: "You went where others wouldn’t.",
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
