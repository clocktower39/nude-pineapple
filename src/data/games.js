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

// Top games by real playtime, straight from the profile.
export const favoriteGames = [
  {
    title: "Tom Clancy's Rainbow Six Siege",
    blurb: "Drone, peek, die, repeat. Operation: just one more ranked.",
    hours: "275+ hrs",
    accent: "cyan",
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
    title: "Fallout 76",
    blurb: "Nuclear winter, rocky launch, somehow 187 hours deep anyway.",
    hours: "175+ hrs",
    accent: "leaf",
  },
  {
    title: "The Witcher 3: Wild Hunt",
    blurb: "Came for the main quest, stayed years for a card game.",
    hours: "175+ hrs",
    accent: "tangerine",
  },
  {
    title: "Zero Hour",
    blurb: "Tactical breaching with the boys. Mind the corners.",
    hours: "150+ hrs",
    accent: "grape",
  },
];
