import { DepartmentName, Gear, RoleName, SkillName } from "./Types";

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
  perRole: Record<RoleName, { gears: Gear[] }>;
}

export const departmentsData: Record<DepartmentName, DepartementData> = {
  corporate: {
    skills: ["deception", "influence"],
    summary:
      "Part of the capitalist machine that owns most of Earth and its orbit.",
    instinct:
      "PARANOIA: Danger Rolls you make with allies present are Skill 0.",
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
    perRole: {
      soldier: { gears: [{ name: "buzzgun" }, { name: "mo-scan" }] },
      researcher: {
        gears: [{ name: "omnichem printer" }, { name: "cadaver-scanner" }],
      },
      operator: { gears: [{ name: "nano-veil" }, { name: "cryo-skin" }] },
      engineer: { gears: [{ name: "tool-printer" }, { name: "snitch-chip" }] },
      advisor: { gears: [{ name: "social-web" }, { name: "forget-me-rod" }] },
      pioneer: {
        gears: [{ name: "holo-projector" }, { name: "feather-belt" }],
      },
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
    perRole: {
      soldier: { gears: [{ name: "multi-gun" }] },
      researcher: {
        gears: [{ name: "cyclo-visor" }, { name: "stem-harvester" }],
      },
      operator: {
        gears: [{ name: "emergency jammer" }, { name: "leech-bank" }],
      },
      engineer: {
        gears: [{ name: "weaponised toolbelt" }, { name: "labour shackle" }],
      },
      advisor: { gears: [{ name: "inquisitor-lens" }, { name: "mind charm" }] },
      pioneer: {
        gears: [{ name: "colosso-borer" }, { name: "grav-belt" }],
      },
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
    perRole: {
      soldier: {
        gears: [{ name: "breaching carbine" }, { name: "pulse sensor" }],
      },
      researcher: {
        gears: [{ name: "stim gun" }],
      },
      operator: { gears: [{ name: "shock pistol" }, { name: "alarm-spike" }] },
      engineer: {
        gears: [{ name: "unifoam gun" }, { name: "quartermaster forge" }],
      },
      advisor: { gears: [{ name: "psychic lash" }, { name: "terror-node" }] },
      pioneer: {
        gears: [{ name: "torch-gun" }, { name: "micro-fighter" }],
      },
    },
  },
  council: {
    skills: ["influence", "software"],
    summary: "Chambers of mediators and lawmakers.",
    instinct:
      "CONTROL: List a three-action plan. Rolls outside the plan are Skill 0.",
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
    perRole: {
      soldier: { gears: [{ name: "suppression gun" }, { name: "body cam" }] },
      researcher: {
        gears: [{ name: "precog node" }, { name: "chrono-chip" }],
      },
      operator: {
        gears: [{ name: "transporter pod" }, { name: "parasite spike" }],
      },
      engineer: { gears: [{ name: "nano-key" }, { name: "crash-prod" }] },
      advisor: { gears: [{ name: "bound-drone" }, { name: "chip dispenser" }] },
      pioneer: {
        gears: [{ name: "void suit" }, { name: "sticky-probe" }],
      },
    },
  },
  android: {
    skills: ["data", "software"],
    summary: "Mechanical beings free from their service.",
    instinct:
      "OBSESSION: The GM puts a question in your head. Until resolved, rolls unrelated to finding the answer are Skill 0",
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
    perRole: {
      soldier: { gears: [{ name: "ripper gun" }, { name: "battle-body" }] },
      researcher: {
        gears: [{ name: "genius-suite" }, { name: "chem-sense" }],
      },
      operator: {
        gears: [{ name: "cyber-halo" }, { name: "virtual black box" }],
      },
      engineer: {
        gears: [{ name: "technical addons" }, { name: "mind-shackle" }],
      },
      advisor: { gears: [{ name: "human-droid-interface" }] },
      pioneer: {
        gears: [{ name: "Future Materials" }, { name: "Eternal Cells" }],
      },
    },
  },
  geno: {
    skills: ["deception", "movement"],
    summary:
      "Genetically Engineered Organisms taking humanity beyond its limits.",
    instinct: "FEAR: Any actions in the view of a non-Ally are Skill 0.",
    naming: {
      forenames: ["An action verb (Dash, Spike)"],
      surname: [
        "Mangled latin animal family/genus (Pantero, Canis, Ursida)",
        "Shortened version of a chemical element (Alumi, Titan, Cyan)",
      ],
    },
    perRole: {
      soldier: {
        gears: [{ name: "hunting rifle" }, { name: "predator gland" }],
      },
      researcher: {
        gears: [{ name: "splicing kit" }, { name: "splice-critter" }],
      },
      operator: {
        gears: [{ name: "prionic amplifier" }, { name: "universal-cells" }],
      },
      engineer: {
        gears: [{ name: "mule-gene" }, { name: "limit-break gland" }],
      },
      advisor: { gears: [{ name: "savant-gene" }, { name: "gene-scent" }] },
      pioneer: {
        gears: [{ name: "blink-gene" }, { name: "night sight" }],
      },
    },
  },
};

export const rolesData: Record<
  RoleName,
  { skills: SkillName[]; summary: string }
> = {
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
