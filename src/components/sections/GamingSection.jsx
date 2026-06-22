import { motion } from "motion/react";
import { ExternalLink, Gamepad2, Trophy } from "lucide-react";
import { Section, Reveal } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SteamStatusBadge } from "@/components/widgets/SteamStatusBadge";
import {
  steamProfile,
  currentlyPlaying,
  favoriteGames,
} from "@/data/games";

// Accent → ring/text classes for game cards.
const ACCENT = {
  pineapple: "from-pineapple/20 text-pineapple",
  grape: "from-grape/20 text-grape-soft",
  leaf: "from-leaf/20 text-leaf",
  tangerine: "from-tangerine/20 text-tangerine",
  cyan: "from-cyan/20 text-cyan",
};

function GameCard({ game, big = false }) {
  const accent = ACCENT[game.accent] ?? ACCENT.pineapple;
  return (
    <div
      className={`lift glass-card group relative flex h-full flex-col overflow-hidden p-5 ${
        big ? "sm:p-6" : ""
      }`}
    >
      {/* gradient wash from the top */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${accent.split(" ")[0]} to-transparent opacity-60`}
        aria-hidden="true"
      />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <h4
            className={`font-display font-semibold ${big ? "text-xl" : "text-base"}`}
          >
            {game.title}
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-fg-muted">
            {game.blurb}
          </p>
        </div>
        <Gamepad2
          className={`shrink-0 ${accent.split(" ").slice(1).join(" ")} opacity-70 transition-transform group-hover:scale-110`}
          size={big ? 26 : 20}
        />
      </div>
      <div className="relative mt-auto flex flex-wrap gap-2 pt-4">
        {game.hours && <span className="chip">⏱ {game.hours}</span>}
        {game.platform && <span className="chip">🎮 {game.platform}</span>}
      </div>
    </div>
  );
}

export function GamingSection() {
  return (
    <Section
      id="gaming"
      kicker="press start"
      title="The Gaming Cave"
      intro="Part Steam profile, part launcher dashboard. The backlog is enormous and I regret nothing."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Steam profile card — styled like a launcher hero */}
        <Reveal>
          <div className="terminal-card relative h-full overflow-hidden border-cyan/25 p-0">
            {/* banner */}
            <div className="relative h-28 bg-gradient-to-br from-grape/40 via-ink-700 to-cyan/30">
              <div className="absolute inset-0 grid-bg opacity-40" />
            </div>

            <div className="px-5 pb-5">
              {/* avatar + identity (status sits on the right, clear of the avatar) */}
              <div className="-mt-10 mb-3 flex items-end justify-between gap-3">
                <div className="flex items-end gap-3">
                  {steamProfile.avatar ? (
                    <img
                      src={steamProfile.avatar}
                      alt={`${steamProfile.username} Steam avatar`}
                      className="h-20 w-20 rounded-xl border-2 border-cyan/60 bg-ink-900 object-cover shadow-glow"
                      loading="lazy"
                    />
                  ) : (
                    <div className="grid h-20 w-20 place-items-center rounded-xl border-2 border-cyan/60 bg-ink-900 text-4xl shadow-glow">
                      🍍
                    </div>
                  )}
                  <div className="pb-1">
                    <p className="font-display text-lg font-semibold leading-tight">
                      {steamProfile.username}
                    </p>
                    <p className="font-mono text-xs text-fg-faint">
                      friend code: {steamProfile.friendCode}
                    </p>
                  </div>
                </div>
                <div className="pb-1">
                  <SteamStatusBadge
                    status={steamProfile.status}
                    game={steamProfile.currentGame}
                  />
                </div>
              </div>

              <p className="mb-4 font-mono text-sm text-cyan">
                <span className="text-fg-faint">{"> "}</span>
                {steamProfile.tagline}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                <Badge variant="grape">
                  <Trophy size={12} /> Level {steamProfile.level}
                </Badge>
                <Badge variant="pineapple">{steamProfile.gamesOwned} games</Badge>
                <Badge variant="leaf">{steamProfile.totalPlaytime} played</Badge>
              </div>

              <Button asChild variant="leaf" className="w-full">
                <a href={steamProfile.url} target="_blank" rel="noreferrer">
                  <ExternalLink /> View full Steam profile
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

        {/* games grid */}
        <div className="flex flex-col gap-6">
          <Reveal delay={0.05}>
            <div className="relative">
              <div className="absolute -top-3 left-4 z-10">
                <span className="chip border-tangerine/40 bg-tangerine/15 text-tangerine">
                  ★ most played
                </span>
              </div>
              <GameCard game={currentlyPlaying} big />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-1 font-mono text-xs text-fg-faint">
              {"// favorite games"}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {favoriteGames.map((g) => (
                <motion.div
                  key={g.title}
                  className="h-full"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <GameCard game={g} />
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
