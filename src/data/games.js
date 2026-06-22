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
  icon: "https://cdn.steamstatic.com/steamcommunity/public/images/apps/976730/196a45d8df1981ff6b6b1872a38dc38f6c22875d.jpg",
};

// Curated favorites. `hours` = real Steam playtime where it exists;
// `platform` is for games that don't live on Steam (no hours to show).
export const favoriteGames = [
  {
    title: "Fallout 4",
    blurb: "432 hours in the wasteland and the main quest is still 'later.' Settlements need me.",
    hours: "400+ hrs",
    accent: "leaf",
    icon: "https://cdn.steamstatic.com/steamcommunity/public/images/apps/377160/779c4356ebe32af2af7c9f0bbba595dfe872cd7f.jpg",
  },
  {
    title: "Starfield",
    blurb: "A thousand planets and I still spent 40 hours in the inventory menu.",
    hours: "250+ hrs",
    accent: "grape",
    icon: "https://cdn.steamstatic.com/steamcommunity/public/images/apps/1716740/b4d5828937b2d29b875405dce97bbae0a5d01bbe.jpg",
  },
  {
    title: "Forza Horizon 5",
    blurb: "Mexico's prettiest roads, driven backwards into a cactus.",
    hours: "200+ hrs",
    accent: "pineapple",
    icon: "https://cdn.steamstatic.com/steamcommunity/public/images/apps/1551360/6c1d20c62c4613263548323052c62cece488876b.jpg",
  },
  {
    title: "The Witcher 3: Wild Hunt",
    blurb: "Came for the main quest, stayed years for a card game.",
    hours: "175+ hrs",
    accent: "tangerine",
    icon: "https://cdn.steamstatic.com/steamcommunity/public/images/apps/292030/7b52d11edee478d652ef4e7103e00644bed2c74c.jpg",
  },
  {
    title: "ANIMAL WELL",
    blurb: "A tiny luminous metroidvania that lives in my head rent-free. No HUD, all vibes.",
    hours: "20+ hrs",
    accent: "cyan",
    icon: "https://cdn.steamstatic.com/steamcommunity/public/images/apps/813230/860b275ec0e63d6a74f6f3f9fc8dd75a49065f07.jpg",
  },
  {
    title: "Metroid Dread",
    blurb: "EMMI nightmares and the best metroidvania movement ever made. Samus supremacy.",
    platform: "Switch",
    accent: "grape",
  },
];

// Recently played — straight from the Steam profile's recent-activity feed.
// `hours` is total on-record; `icon` is the Steam square game icon.
export const recentGames = [
  {
    title: "Sons Of The Forest",
    hours: "23h",
    url: "https://steamcommunity.com/app/1326470",
    icon: "https://shared.fastly.steamstatic.com/community_assets/images/apps/1326470/bd28fe592b339cff5a3eef743f31e3166c984c68.jpg",
  },
  {
    title: "HITMAN World of Assassination",
    hours: "13h",
    url: "https://steamcommunity.com/app/1659040",
    icon: "https://shared.fastly.steamstatic.com/community_assets/images/apps/1659040/552be1d38866afd1c33f682323d325130e7d0ce6.jpg",
  },
  {
    title: "MECCHA CHAMELEON",
    hours: "3h",
    url: "https://steamcommunity.com/app/4704690",
    icon: "https://shared.fastly.steamstatic.com/community_assets/images/apps/4704690/fbef288370f6ae51cb0a5066d7fb13d26147c94a.jpg",
  },
  {
    title: "Halo: The Master Chief Collection",
    hours: "532h",
    url: "https://steamcommunity.com/app/976730",
    icon: "https://shared.fastly.steamstatic.com/community_assets/images/apps/976730/196a45d8df1981ff6b6b1872a38dc38f6c22875d.jpg",
  },
  {
    title: "Batman: Arkham City",
    hours: "9h",
    url: "https://steamcommunity.com/app/200260",
    icon: "https://shared.fastly.steamstatic.com/community_assets/images/apps/200260/746ecf3ce44b2525eb7ad643e76a3b60913d2662.jpg",
  },
];
