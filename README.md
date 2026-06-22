# 🍍 Nude Pineapple

Matt's weird little corner of the internet — a personal site, gaming cave & dev playground.
Built with **Vite + React + Tailwind v4**, a few **shadcn-ui** primitives, and **Motion** for animation.

## Run it

```bash
yarn          # install
yarn dev      # http://localhost:5173
yarn build    # production build → dist/
yarn preview  # preview the build
```

## Editing content (no JSX required)

All the words/links live in plain data files under `src/data/` — edit these and the
UI updates itself:

| File | What it controls |
| --- | --- |
| `profile.js` | Your name, taglines, social links, and the hero terminal lines |
| `games.js` | Steam profile card + currently-playing / favorite games |
| `hobbies.js` | The "Stuff I'm Into" cards (icon + accent + tags) |
| `projects.js` | The "Things I've Built" cards (what it is / why it's cool) |
| `obsessions.js` | The "Currently Obsessed With" meters |
| `facts.js` | Pool for the "Random Matt fact" button |

Accents (`pineapple`, `grape`, `leaf`, `tangerine`, `hot`, `cyan`) and the whole color
system are defined once in `src/index.css` under `@theme`.

## Structure

```
src/
  data/          editable content (above)
  hooks/         useTypewriter · useKonami · useReducedMotion
  components/
    ui/          shadcn primitives (button, card, badge, tooltip)
    icons/       Brand glyphs (GitHub, Steam — lucide dropped these)
    layout/      Navbar · Section wrapper
    widgets/     PineappleLogo · TerminalWidget · RandomFactButton · SteamStatusBadge
    sections/    Hero · Gaming · Hobbies · Projects · Obsessions · Footer
    eggs/        KonamiEgg · consoleGreeting
  App.jsx        assembles the single scrolling page
```

## Hidden stuff 🕹️

- **Konami code** (`↑ ↑ ↓ ↓ ← → ← → B A`) → maximum pineapple.
- Open **devtools** for a console greeting.
- **Click the pineapple** mascot a few times.

## Expanding later

It's a normal single-page React app. To add routes (e.g. `/blog`), drop in
`react-router-dom` and wrap `App`. To pull **live** Steam data, replace the
placeholders in `games.js` with a small fetch from the Steam Web API.
