import {
  DepartementData,
  DepartmentName,
  RoleData,
  RoleName,
  SkillName,
} from "./Types";

export const skillData: Record<SkillName, { description: string }> = {
  data: { description: "Research and analysis" },
  deception: { description: "Concealment and falsehood" },
  empathy: { description: "Networking and relationships" },
  force: { description: "Destruction and subdual" },
  hardware: { description: "Repair and graft" },
  influence: { description: "Persuasion and rhetoric" },
  movement: { description: "Speed and agility" },
  software: { description: "Terminals and networks" },
};

export const departmentsData: Record<DepartmentName, DepartementData> = {
  corporate: {
    skills: ["deception", "influence"],
    summary:
      "Part of the capitalist machine that owns most of Earth and its orbit.",
    description:
      "You were a part of a cutthroat world where ambition and influence are everything.",
    instinct: {
      name: "PARANOIA",
      description: "Danger Rolls you make with allies present are Skill 0.",
    },
    random_things: [
      { prob: 1, description: "Basic Holo Pet" },
      { prob: 2, description: "Laser-Pointer Finger" },
      { prob: 3, description: "Voice Modifier" },
      { prob: 4, description: "Colour-Changing Hair" },
      { prob: 5, description: "Integrated Sound Effects" },
      { prob: 6, description: "Face-Pixelator" },
      { prob: 8, description: "E-Smokes" },
      { prob: 9, description: "Chill-Patches" },
      { prob: 10, description: "Buzz Pills" },
      { prob: 12, description: "Filter-Glasses" },
      { prob: 15, description: "Incense Sticks" },
      { prob: 16, description: "Vitamin Gum" },
      { prob: 18, description: "E-Mood Ring" },
      { prob: 20, description: "Stim-Spike" },
      { prob: 24, description: "Crocodile Boots" },
      { prob: 25, description: "Medical Care Token" },
      { prob: 30, description: "Air Filter" },
      { prob: 36, description: "Snack Printer (hourly recharge)" },
    ],
    naming: {
      forenames: [
        {
          trick: "Two letters spelled phonetically",
          exemples: ["Aybee", "Wyar"],
        },
        { trick: "A fancy colour", exemples: ["Ochre", "Sepia"] },
      ],
      surname: [
        {
          trick: "A city behind a surname prefix",
          exemples: ["Van Paris", "O’Lahore"],
        },
        {
          trick: "Compound of a positive adjective and noun",
          exemples: ["Brightpath", "Clearbar"],
        },
      ],
    },
    perRole: {
      soldier: {
        gears: [
          {
            name: "buzzgun",
            description: "2E or Crash all software on the target’s devices.",
          },
          {
            name: "mo-scan",
            description:
              "Your device has a motion sensor that sweeps a 90 degree arc in front of you.",
          },
        ],
      },
      researcher: {
        gears: [
          {
            name: "omnichem printer",
            description:
              "You have your own Printer (with its own Gauge) that can print small flasks of Chemicals as needed.",
          },
          {
            name: "cadaver-scanner",
            description:
              "Insert spike into a corpse to get a readout of its likely cause of death.",
          },
        ],
      },
      operator: {
        gears: [
          {
            name: "Nano-Veil",
            description:
              "Mask your face to resemble somebody whose face you have stored on your Device.",
          },
          {
            name: "Cryo-Skin",
            description:
              "You do not show on scans for life signs or heat signature.",
          },
        ],
      },
      engineer: {
        gears: [
          {
            name: "Tool-Printer",
            description:
              "You have your own Printer (with a Gauge) that can only print tools.",
          },
          {
            name: "Snitch-Chip",
            description:
              "Your device alerts you when somebody nearby is breaking protocol.",
          },
        ],
      },
      advisor: {
        gears: [
          {
            name: "Social-Web",
            description:
              "Scan two individuals with your device to give a readout of their relationship.",
          },
          {
            name: "Forget-me-Rod",
            description:
              "Discharge into an incapacitated or sleeping being. They don’t remember you when they wake.",
          },
        ],
      },
      pioneer: {
        gears: [
          {
            name: "Holo-Projector",
            description:
              "Your device can project a hologram of yourself and displays what they see.",
          },
          {
            name: "Feather-Belt",
            description: "You can fall any distance and land softly.",
          },
        ],
      },
    },
  },
  union: {
    skills: ["empathy", "force"],
    summary: "Communities of workers fighting their cause.",
    description:
      "You were part of an Industrial Union fiercely protecting a common interest and community.",
    instinct: {
      name: "DEPENDENCY",
      description: "Danger Rolls you attempt on your own are Skill 0.",
    },
    random_things: [
      { prob: 1, description: "Patch-Covered Jacket" },
      { prob: 2, description: "Repurposed Mining Helmet" },
      { prob: 3, description: "Ceremonial Beads" },
      { prob: 4, description: "Decorative Scars" },
      { prob: 5, description: "Psychedelic Vac-suit" },
      {
        prob: 6,
        description: "Decorative goggles/ breather modelled after an animal",
      },
      { prob: 8, description: "Old Dog-like-Thing" },
      { prob: 9, description: "Ancestral ashes" },
      { prob: 10, description: "Bottle of Industrial Alcohol" },
      { prob: 12, description: "Vibro-Machete" },
      { prob: 15, description: "Cigars and Wicked Lighter" },
      { prob: 16, description: "Lazy Cat-like-Thing" },
      { prob: 18, description: "Tarot deck" },
      { prob: 20, description: "Religious symbol" },
      { prob: 24, description: "Ridiculous axe" },
      { prob: 25, description: "Banjo" },
      { prob: 30, description: "Meteor chunk on a chain" },
      { prob: 36, description: "Herbal remedies" },
    ],
    naming: {
      forenames: [
        { trick: "An animal, or shortened version", exemples: ["Gull", "Roo"] },
        { trick: "Common modern surname", exemples: ["Smith", "Martinez"] },
      ],
      surname: [
        { trick: "A moon or star", exemples: ["Antares", "Miranda"] },
        { trick: "Shortened colony name", exemples: ["Briggton", "Fortvega"] },
      ],
    },
    perRole: {
      soldier: {
        gears: [
          {
            name: "Multi-Gun",
            description:
              "Freely switch between three modes. The transformation takes a few moments:",
            options: [
              "Storm-Mode (2E, blasts an area with electricity)",

              "Plas-Mode (3E, Tick 1 Hurt on a Fail)",

              "Thermo-Mode (2E, burn through anything)",
            ],
          },
        ],
      },
      researcher: {
        gears: [
          {
            name: "Cyclop-Visor",
            description:
              "Sweeps your vision for life forms. Can see through one wall.",
          },
          {
            name: "Stem-Harvester",
            description:
              "Drains a recent human corpse to create a med-shot that restores 3 Hurt from the target.",
          },
        ],
      },
      operator: {
        gears: [
          {
            name: "Emergency Jammer",
            description: "Shuts down all powered devices in the nearby area.",
          },
          {
            name: "Leech-Bank",
            description:
              "Can drain and store power from anything up to a small vessel.",
          },
        ],
      },
      engineer: {
        gears: [
          {
            name: "Weaponised Toolbelt",
            description: "+1E when using a tool as a weapon.",
          },
          {
            name: "Labour Shackle",
            description:
              "Commit yourself to a task to get +1d on rolls, but take 1 Hurt if you step away without completing it.",
          },
        ],
      },
      advisor: {
        gears: [
          {
            name: "Inquisitor-Lens",
            description:
              "Ask if somebody is lying. If they are they take 1 Stress, otherwise you do.",
          },
          {
            name: "Mind Charm",
            description: "Your mind is shielded from any sort of interference.",
          },
        ],
      },
      pioneer: {
        gears: [
          {
            name: "Colosso-Borer",
            description:
              "Loudly blast a man-sized hole through any surface. Takes a few moments to recharge.",
          },
          {
            name: "Grav-Belt",
            description:
              "You always have just enough gravity, and don’t suffer harm from falling.",
          },
        ],
      },
    },
  },
  naval: {
    skills: ["force", "hardware"],
    summary: "Private military fleets for hire.",
    description:
      "You were part of a contracted private military that holds no permanent allegiance.",
    instinct: {
      name: "HOSTILITY",
      description: "All Danger Rolls other than attacks are Skill 0.",
    },
    random_things: [
      { prob: 1, description: "Cyber Hand" },
      { prob: 2, description: "Cyber Eye" },
      { prob: 3, description: "Ceremonial Sabre [1e]" },
      { prob: 4, description: "Petty Medals" },
      { prob: 5, description: "Trumpet" },
      { prob: 6, description: "Star-Worm Tattoo" },
      { prob: 8, description: "Bottle of black rum" },
      { prob: 9, description: "Trick Dice" },
      { prob: 10, description: "Booze-Printer (2 shots/ hour)" },
      { prob: 12, description: "Cyber-Canary" },
      { prob: 15, description: "Bag of Marbles" },
      { prob: 16, description: "Disgusting Living Slime in a Jar" },
      { prob: 18, description: "Pristine Uniform" },
      { prob: 20, description: "Rat-Catcher-Drone" },
      { prob: 24, description: "Cyber-Leg" },
      { prob: 25, description: "E-Scope" },
      { prob: 30, description: "Bomber Jacket" },
      { prob: 36, description: "Alien Knife [1e]" },
    ],
    naming: {
      forenames: [
        { trick: "An affectionate nickname", exemples: ["Chopper", "Ace"] },
        { trick: "An insulting nickname", exemples: ["Squirt", "Grunt"] },
      ],
      surname: [
        { trick: "Bodypart descriptor", exemples: ["Surehand", "Firehead"] },
        { trick: "Dress descriptor", exemples: ["Redsash", "Cloaker"] },
      ],
    },
    perRole: {
      soldier: {
        gears: [
          {
            name: "Breaching Carbine",
            description: "2E, blast through walls.",
          },
          {
            name: "Pulse Sensor",
            description: "Can sense a heartbeat through walls.",
          },
        ],
      },
      researcher: {
        gears: [
          {
            name: "Stim Gun",
            description:
              "Dose lasts for one action and causes 1 Stress when it wears off",
            options: [
              "Beast: +2 Movement",

              "Calm: Temporarily ignore all Stress and Trauma but you can’t speak.",

              "Recall: You have perfect memory recall.",
            ],
          },
        ],
      },
      operator: {
        gears: [
          {
            name: "Shock Pistol",
            description:
              "1E, -1d at Long Range, and can temporarily fry a machine.",
          },
          {
            name: "Alarm-Spike",
            description: "When spiked into a network all alarms are triggered.",
          },
        ],
      },
      engineer: {
        gears: [
          {
            name: "Unifoam Gun",
            description:
              "Fire rapidly hardening foam to plug a breach or cocoon a subdued creature (1E).",
          },
          {
            name: "Quartermaster Forge",
            description:
              "A mobile Printer with the same function as that on your ship (uses the same Gauge).",
          },
        ],
      },
      advisor: {
        gears: [
          { name: "Psychic Lash", description: "Melee, causes 2 Stress." },
          {
            name: "Terror-Node",
            description:
              "Touch somebody to get a sense of their biggest current fear.",
          },
        ],
      },
      pioneer: {
        gears: [
          {
            name: "Torch-Gun",
            description: "2E. Very short range but burns all in its blast.",
          },
          {
            name: "Micro-Fighter",
            description:
              "A small fighter-craft (2E Guns, One Hull-Breaching Torpedo) that flies independently and can be commanded remotely.",
          },
        ],
      },
    },
  },
  council: {
    skills: ["influence", "software"],
    summary: "Chambers of mediators and lawmakers.",
    description:
      "You’re from the halls of an organisation seeking consensus between corporations, navies, and unions.",
    instinct: {
      name: "CONTROL",
      description:
        "List a three-action plan. Rolls outside the plan are Skill 0.",
    },
    random_things: [
      { prob: 1, description: "Palm-Projection Screen" },
      { prob: 2, description: "Mentally Stored E-Library (Fiction)" },
      { prob: 3, description: "Morph-Outfit" },
      { prob: 4, description: "Unhelpful Holo Doctor" },
      { prob: 5, description: "Wrist-mounted AI PA" },
      { prob: 6, description: "Palm-mounted Text-to-Data Scanner" },
      { prob: 8, description: "Flip Visor" },
      { prob: 9, description: "Fashion Cane" },
      { prob: 10, description: "Ineffective Med-Spray" },
      { prob: 12, description: "Finger-Marker" },
      { prob: 15, description: "Coffee-Printer-Flask (daily refill)" },
      { prob: 16, description: "Disposable Chem-Probe" },
      { prob: 18, description: "Emotion-Suppression Pills" },
      { prob: 20, description: "Weak Taser" },
      { prob: 24, description: "Dream-Filter Headband" },
      { prob: 25, description: "Adjustable Digital Earplugs" },
      { prob: 30, description: "Lunch-Printer (daily salad or mock-sushi)" },
      {
        prob: 36,
        description:
          "Portable Void-Plant (generates enough oxygen for you only)",
      },
    ],
    naming: {
      forenames: [
        { trick: "A traditional virtue", exemples: ["Temperance", "Serenity"] },
        { trick: "A prestigious animal", exemples: ["Dove", "Lion"] },
      ],
      surname: [
        { trick: "A building material", exemples: ["Slate", "Pine"] },
        { trick: "An outdated profession", exemples: ["Fletcher", "Miller"] },
      ],
    },
    perRole: {
      soldier: {
        gears: [
          {
            name: "Suppression Gun",
            description:
              "(2E and either blinds or mutes the victim temporarily)",
          },
          { name: "Body Cam", description: "With neutral interface" },
        ],
      },
      researcher: {
        gears: [
          {
            name: "Precog Node",
            description:
              "Tick 1 Stress to Declare that your last action was just a simulation, rewinding back to before you declared it. You can’t rewind the same action twice.",
          },
          {
            name: "Chrono-Chip",
            description:
              "You have perfect sense of time and know if time is being messed with.",
          },
        ],
      },
      operator: {
        gears: [
          {
            name: "Transporter Pod",
            description:
              "Set up in a fixed position. You can teleport back to it at will.",
          },
          {
            name: "Parasite Spike",
            description:
              "An android or person that you stab with this immediately follows a single command until they suffer Hurt or Stress.",
          },
        ],
      },
      engineer: {
        gears: [
          {
            name: "Nano-Key",
            description:
              "Can open any locked door, but doesn’t circumvent alarms.",
          },
          {
            name: "Crash-Prod",
            description: "A few moments of contact hard-reboots any machine.",
          },
        ],
      },
      advisor: {
        gears: [
          {
            name: "Bound-Drone",
            description:
              "Floats next to you and translates between you and any machine.",
          },
          {
            name: "Chip Dispenser",
            description:
              "Plant a chip into somebody’s hand to be able to track them and their body readout with your device.",
          },
        ],
      },
      pioneer: {
        gears: [
          {
            name: "Void Suit",
            description:
              "Transforms into a miniature escape pod when activated, with life support and fuel enough travel within orbit.",
          },
          {
            name: "Sticky-Probe",
            description:
              "Small sticky camera with neural link, can be thrown safely.",
          },
        ],
      },
    },
  },
  android: {
    skills: ["data", "software"],
    summary: "Mechanical beings free from their service.",
    description:
      "You were built for a purpose, but you’re free from your service. You don’t have organic needs.",
    instinct: {
      name: "OBSESSION",
      description:
        "The GM puts a question in your head. Until resolved, rolls unrelated to finding the answer are Skill 0",
    },
    random_things: [
      { prob: 1, description: "Full machine voice." },
      { prob: 2, description: "Spare Head" },
      { prob: 3, description: "One limb clearly from another model" },
      { prob: 4, description: "Detachable eye" },
      { prob: 5, description: "Mildly adhesive spit" },
      { prob: 6, description: "Hidden compartment" },
      { prob: 8, description: "Detachable lower half" },
      { prob: 9, description: "Extra eye in rear" },
      { prob: 10, description: "Retractable head" },
      { prob: 12, description: "Alcoholic waste liquid" },
      {
        prob: 15,
        description:
          "Internal moss colony (you generate a little oxygen from CO2)",
      },
      { prob: 16, description: "Weak laser-cutter in thumb" },
      { prob: 18, description: "Compress down to a briefcase." },
      { prob: 20, description: "Electromagnetic hands" },
      {
        prob: 24,
        description:
          "Basilisk Whisper (whisper a code to another android to crash them for a moment)",
      },
      { prob: 25, description: "Adjustable pigment." },
      { prob: 30, description: "Detachable and independent hand." },
      {
        prob: 36,
        description: "Shock-legs allowing you to fall safely from any height.",
      },
    ],
    naming: {
      forenames: [
        { trick: "Nature noun", exemples: ["Leaf", "River"] },
        {
          trick: "Extended phonetic version of a letter",
          exemples: ["Beeb", "Esso", "Ellie"],
        },
      ],
      surname: [
        { trick: "Two numbers", exemples: ["9-2", "1-14"] },
        {
          trick: "An old computer function or part",
          exemples: ["Write", "Valve"],
        },
      ],
    },
    perRole: {
      soldier: {
        gears: [
          { name: "Ripper Gun", description: "(2E, +1d at Point Blank)" },
          {
            name: "Battle-Body",
            description: "Restore your Hurt Gauge once per job.",
          },
        ],
      },
      researcher: {
        gears: [
          {
            name: "Genius-Suite",
            description:
              "You have all current scientific knowledge and trivia stored, but sometimes it takes a moment to recall.",
          },
          {
            name: "Chem-Sense",
            description:
              "You can identify specific chemicals by smell and taste.",
          },
        ],
      },
      operator: {
        gears: [
          {
            name: "Cyber-Halo",
            description:
              "Wirelessly access nearby devices. Tick 1 Stress to remotely crash a device without arousing suspicion.",
          },
          {
            name: "Virtual Black Box",
            description:
              "When you would be killed you can always be restored at a mainframe.",
          },
        ],
      },
      engineer: {
        gears: [
          {
            name: "Technical Addons",
            description:
              "Your body contains a variety of small tools as needed.",
          },
          {
            name: "Mind-Shackle",
            description: "Ignore Stress from unpleasant situations.",
          },
        ],
      },
      advisor: {
        gears: [
          {
            name: "Human-Droid-Interface",
            description:
              "Hold hands with a human to feel their emotions and desires. You pass for human but have none of their needs.",
          },
        ],
      },
      pioneer: {
        gears: [
          {
            name: "Future Materials",
            description:
              "Total protection from extremes of heat, corrosive chemicals, and EMP/ radiation.",
          },
          {
            name: "Eternal Cells",
            description: "You can consume minerals to charge your power.",
          },
        ],
      },
    },
  },
  geno: {
    skills: ["deception", "movement"],
    summary:
      "Genetically Engineered Organisms taking humanity beyond its limits.",
    description:
      "The legality of your existence is a grey area but you’re better off keeping a low profile.",
    instinct: {
      name: "FEAR",
      description: "Any actions in the view of a non-Ally are Skill 0.",
    },
    random_things: [
      { prob: 1, description: "Atypical skin hue." },
      { prob: 2, description: "Completely hairless." },
      { prob: 3, description: "Unable to process meat." },
      { prob: 4, description: "Unable to process plant-based food." },
      { prob: 5, description: "Strange hands." },
      { prob: 6, description: "Unusual eyes." },
      { prob: 8, description: "Atypical hair hue." },
      { prob: 9, description: "Atypical voice tone." },
      { prob: 10, description: "Distracting breathing noise." },
      { prob: 12, description: "Never sleep." },
      { prob: 15, description: "Coma-like sleep at will." },
      { prob: 16, description: "Irritated by natural light." },
      { prob: 18, description: "Clumsy in natural gravity." },
      { prob: 20, description: "Always cold." },
      { prob: 24, description: "Rapid heartbeat." },
      { prob: 25, description: "Atypical teeth." },
      { prob: 30, description: "Very high body temperature." },
      { prob: 36, description: "Animals hate you" },
    ],
    naming: {
      forenames: [{ trick: "An action verb", exemples: ["Dash", "Spike"] }],
      surname: [
        {
          trick: "Mangled latin animal family/genus",
          exemples: ["Pantero", "Canis", "Ursida"],
        },
        {
          trick: "Shortened version of a chemical element",
          exemples: ["Alumi", "Titan", "Cyan"],
        },
      ],
    },
    perRole: {
      soldier: {
        gears: [
          { name: "Hunting Rifle", description: "(2E, +1d at Long Range)" },
          {
            name: "Predator Gland",
            description:
              "Declare a target. +1E when you intend to kill them. Tick 2 Stress if your target escapes.",
          },
        ],
      },
      researcher: {
        gears: [
          {
            name: "Splicing Kit",
            description:
              "Inject another being to give them a short term alteration:",
            options: ["Water Breathing", "Acidic Spit", "Toxin immunity"],
          },
          {
            name: "Splice-Critter",
            description:
              "Small animal, remarkably quick and stealthy with a 1E Bite.",
          },
        ],
      },
      operator: {
        gears: [
          {
            name: "Psionic Amplifier",
            description: "•	Tick 1 Stress to get a Vision.",
            options: [
              "Tick 2 Stress to unleash telekinesis, pyrokinesis, or telepathy.",
            ],
          },
          {
            name: "Universal-Cells",
            description:
              "You can touch a machine to interface with it as if your device were plugged in.",
          },
        ],
      },
      engineer: {
        gears: [
          {
            name: "Mule-Gene",
            description:
              "You can carry guns and tools not intended to be portable.",
          },
          {
            name: "Limit-Break Gland",
            description:
              "Tick 1 Hurt to perform an act of superhuman strength or speed.",
          },
        ],
      },
      advisor: {
        gears: [
          {
            name: "Savant-Gene",
            description:
              "You have perfect memory recall and mental arithmetic. Tick 1 Stress to get +2d on any mental action.",
          },
          {
            name: "Gene-Scent",
            description:
              "You can spot a GENO on sight and get a rough idea of their modifications.",
          },
        ],
      },
      pioneer: {
        gears: [
          {
            name: "Blink-Gene",
            description:
              "Blink between shadows. Tick 1 Stress to blink through a wall.",
          },
          { name: "Night Sight", description: "Perfect darkvision." },
        ],
      },
    },
  },
};

export const rolesData: Record<RoleName, RoleData> = {
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
