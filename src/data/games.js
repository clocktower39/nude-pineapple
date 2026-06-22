/*
  Steam / gaming data — pulled from the public Steam + SteamHunters profile
  (steamid 76561198099664952). Hours are real playtime, rounded.
  `status` drives the SteamStatusBadge.
  status: "in-game" | "online" | "away" | "offline"
*/

export const steamProfile = {
  username: "Nude Pineapple",
  friendCode: "139399224",
  url: "https://steamcommunity.com/id/NudePineapple/",
  status: "online",
  currentGame: null, // not in-game at build time
  level: 15,
  gamesOwned: 255,
  totalPlaytime: "6¼ months",
  avatar:
    "https://avatars.steamstatic.com/babeccfd31815d014712e990fb5f8852c7fe1fcd_full.jpg",
  tagline: "532 hours in Halo and the backlog still wins",
};

// The headline card — most hours on record.
export const currentlyPlaying = {
  title: "Halo: The Master Chief Collection",
  blurb: "532 hours of 'just one more match.' Finish the fight, then start it again.",
  hours: "500+ hrs",
  accent: "tangerine",
};

// Curated favorites. `hours` = real Steam playtime where it exists;
// `platform` is for games that don't live on Steam (no hours to show).
export const favoriteGames = [
  {
    title: "Fallout 4",
    blurb: "432 hours in the wasteland and the main quest is still 'later.' Settlements need me.",
    hours: "400+ hrs",
    accent: "leaf",
  },
  {
    title: "Starfield",
    blurb: "A thousand planets and I still spent 40 hours in the inventory menu.",
    hours: "250+ hrs",
    accent: "grape",
  },
  {
    title: "Forza Horizon 5",
    blurb: "Mexico's prettiest roads, driven backwards into a cactus.",
    hours: "200+ hrs",
    accent: "pineapple",
  },
  {
    title: "The Witcher 3: Wild Hunt",
    blurb: "Came for the main quest, stayed years for a card game.",
    hours: "175+ hrs",
    accent: "tangerine",
  },
  {
    title: "ANIMAL WELL",
    blurb: "A tiny luminous metroidvania that lives in my head rent-free. No HUD, all vibes.",
    hours: "20+ hrs",
    accent: "cyan",
  },
  {
    title: "Metroid Dread",
    blurb: "EMMI nightmares and the best metroidvania movement ever made. Samus supremacy.",
    platform: "Switch",
    accent: "grape",
  },
];
