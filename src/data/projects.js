/*
  Project cards - fun, not a formal portfolio.
  Each card has: what it is + why it's cool.
  `status`: "live" | "building" | "experiment" | "ongoing"
*/

export const projects = [
  {
    title: "Firebelly Fitness",
    emoji: "🔥",
    accent: "tangerine",
    status: "live",
    what: "A fitness app for tracking workouts, programs, and progress.",
    why: "Real users, real reps. Full-stack build where the gym and the codebase both get heavier over time.",
    tags: ["React", "Node", "full-stack"],
    link: null,
  },
  {
    title: "Dauntless Athletics",
    emoji: "🤸",
    accent: "hot",
    status: "live",
    what: "Web presence + tooling for a cheer/tumbling gym.",
    why: "Coaching meets code, built for a world I actually stand in (and occasionally get thrown into).",
    tags: ["web", "cheer", "small business"],
    link: null,
  },
  {
    title: "The Homelab",
    emoji: "🖥️",
    accent: "leaf",
    status: "ongoing",
    what: "A rack of Docker, Linux, Home Assistant, media servers & self-hosted everything.",
    why: "My personal cloud that I can `ssh` into and break at 2am. Privacy, control, and an excuse to buy more drives.",
    tags: ["Docker", "Linux", "self-hosted"],
    link: null,
  },
  {
    title: "Agent Workflows",
    emoji: "🤖",
    accent: "grape",
    status: "building",
    what: "Custom harnesses, worktrees & automations driving Claude Code / Codex.",
    why: "Teaching agents to do the repetitive parts. It's like having interns who never sleep and occasionally hallucinate.",
    tags: ["Claude Code", "Codex", "harnesses"],
    link: null,
  },
  {
    title: "Random Experiments",
    emoji: "🧪",
    accent: "pineapple",
    status: "experiment",
    what: "Half-finished ideas, weird scripts, and 'what if I built X' weekends.",
    why: "The graveyard and the garden of side projects. Some die, some ship, all teach something.",
    tags: ["tinkering", "side quests"],
    link: null,
  },
  {
    title: "This Site",
    emoji: "🍍",
    accent: "cyan",
    status: "live",
    what: "The thing you're looking at. Vite + React, neon, and zero chill.",
    why: "A homepage that feels like a person made it, packed with terminal widgets, easter eggs, and a pineapple with no shame.",
    tags: ["Vite", "React", "Tailwind"],
    link: null,
  },
];
