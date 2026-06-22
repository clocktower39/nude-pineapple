/*
  Steam / gaming data. Placeholder values for now — swap in your real
  favorites + hours. `status` drives the SteamStatusBadge.
  status: "in-game" | "online" | "away" | "offline"
*/

export const steamProfile = {
  username: "Nude Pineapple",
  friendCode: "139399224",
  url: "https://steamcommunity.com/id/NudePineapple/",
  status: "in-game",
  currentGame: "Helldivers 2",
  level: 42, // placeholder Steam level
  // Drop in your real avatar URL later; falls back to the pineapple mark.
  avatar: null,
  tagline: "for democracy, and the backlog",
};

export const currentlyPlaying = {
  title: "Helldivers 2",
  blurb: "Spreading managed democracy one bug planet at a time.",
  hours: "120+ hrs",
  accent: "tangerine",
};

export const favoriteGames = [
  {
    title: "Counter-Strike 2",
    blurb: "Still clutching rounds I have no business winning.",
    hours: "900+ hrs",
    accent: "pineapple",
  },
  {
    title: "Baldur's Gate 3",
    blurb: "Roll for initiative, then roll back the save file.",
    hours: "210 hrs",
    accent: "grape",
  },
  {
    title: "Factorio",
    blurb: "The factory must grow. So must my electricity bill.",
    hours: "180 hrs",
    accent: "leaf",
  },
  {
    title: "Rocket League",
    blurb: "Aerial flip resets in my dreams, own-goals in reality.",
    hours: "640 hrs",
    accent: "cyan",
  },
];
