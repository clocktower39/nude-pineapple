/*
  Central profile / link config. Edit this one file to update who Matt is
  and where the buttons point. Everything else reads from here.
*/

export const profile = {
  name: "Matt",
  handle: "Nude Pineapple",
  domain: "NudePineapple.com",
  role: "self-taught full-stack web developer",
  location: "somewhere between a terminal and a homelab",

  // Rotating hero taglines — add as many as you like.
  taglines: [
    "a personal site, gaming cave & dev playground",
    "Matt's weird little corner of the internet",
    "half portfolio, half Steam profile, half pineapple",
    "ships web apps, breeds coding agents, lifts heavy things",
  ],

  // Real links (swap freely).
  links: {
    github: "https://github.com/clocktower39",
    steam: "https://steamcommunity.com/id/NudePineapple/",
    email: "matt@mattkearns.dev",
    // Reserved slots for later — left null so the footer hides them.
    discord: null,
    youtube: null,
  },
};

// Short, punchy lines the hero terminal "types" out.
export const terminalLines = [
  "$ whoami",
  "matt — full-stack dev, agent wrangler, cheer coach",
  "$ cat stack.txt",
  "react · node · docker · linux · a suspicious number of GPUs",
  "$ ./run-agents.sh",
  "spawning claude code + codex worktrees... done ✓",
  "$ echo $MOOD",
  "building weird things and lifting heavier ones 🍍",
];
