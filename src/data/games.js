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
  avatar: "/avatar.jpg", // local copy in public/
  tagline: "532 hours in Halo and the backlog still wins",
};

// The headline card — most hours on record.
export const currentlyPlaying = {
  title: "Halo: The Master Chief Collection",
  blurb: "532 hours of 'just one more match.' Finish the fight, then start it again.",
  hours: "500+ hrs",
  accent: "tangerine",
  icon: "/games/halo-mcc.jpg",
};

// Curated favorites. `hours` = real Steam playtime where it exists;
// `platform` is for games that don't live on Steam (no hours to show).
export const favoriteGames = [
  {
    title: "Fallout 4",
    blurb: "432 hours in the wasteland and the main quest is still 'later.' Settlements need me.",
    hours: "400+ hrs",
    accent: "leaf",
    icon: "/games/fallout4.jpg",
  },
  {
    title: "Starfield",
    blurb: "A thousand planets and I still spent 40 hours in the inventory menu.",
    hours: "250+ hrs",
    accent: "grape",
    icon: "/games/starfield.jpg",
  },
  {
    title: "Forza Horizon 5",
    blurb: "Mexico's prettiest roads, driven backwards into a cactus.",
    hours: "200+ hrs",
    accent: "pineapple",
    icon: "/games/forza-horizon5.jpg",
  },
  {
    title: "The Witcher 3: Wild Hunt",
    blurb: "Came for the main quest, stayed years for a card game.",
    hours: "175+ hrs",
    accent: "tangerine",
    icon: "/games/witcher3.jpg",
  },
  {
    title: "ANIMAL WELL",
    blurb: "A tiny luminous metroidvania that lives in my head rent-free. No HUD, all vibes.",
    hours: "20+ hrs",
    accent: "cyan",
    icon: "/games/animal-well.jpg",
  },
  {
    title: "Metroid Dread",
    blurb: "EMMI nightmares and the best metroidvania movement ever made. Samus supremacy.",
    platform: "Switch",
    accent: "grape",
    icon: "/games/metroid-dread.jpg",
  },
];

// Recently played — straight from the Steam profile's recent-activity feed.
// `hours` is total on-record; `icon` is the Steam square game icon.
export const recentGames = [
  {
    title: "Sons Of The Forest",
    hours: "23h",
    url: "https://steamcommunity.com/app/1326470",
    icon: "/games/sons-of-the-forest.jpg",
  },
  {
    title: "HITMAN World of Assassination",
    hours: "13h",
    url: "https://steamcommunity.com/app/1659040",
    icon: "/games/hitman-woa.jpg",
  },
  {
    title: "MECCHA CHAMELEON",
    hours: "3h",
    url: "https://steamcommunity.com/app/4704690",
    icon: "/games/meccha-chameleon.jpg",
  },
  {
    title: "Halo: The Master Chief Collection",
    hours: "532h",
    url: "https://steamcommunity.com/app/976730",
    icon: "/games/halo-mcc.jpg",
  },
  {
    title: "Batman: Arkham City",
    hours: "9h",
    url: "https://steamcommunity.com/app/200260",
    icon: "/games/batman-arkham-city.jpg",
  },
];
