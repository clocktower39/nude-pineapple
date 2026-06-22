import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Mail, Rocket } from "lucide-react";
import { GithubGlyph, SteamGlyph } from "@/components/icons/Brand";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PineappleLogo } from "@/components/widgets/PineappleLogo";
import { TerminalWidget } from "@/components/widgets/TerminalWidget";
import { profile } from "@/data/profile";

function RotatingTagline() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setI((p) => (p + 1) % profile.taglines.length),
      3200
    );
    return () => clearInterval(t);
  }, []);

  return (
    <span className="relative inline-block min-h-[1.6em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4 }}
          className="inline-block"
        >
          {profile.taglines[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative grid-bg flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-16 sm:px-8"
    >
      {/* floating background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 animate-float-slow rounded-full bg-grape/20 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 animate-float rounded-full bg-pineapple/15 blur-[110px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex flex-wrap items-center gap-2"
          >
            <Badge variant="leaf">
              <span className="mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-leaf" />
              online & overcaffeinated
            </Badge>
            <Badge variant="pineapple">{profile.role}</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
          >
            <span className="text-gradient">NUDE</span>
            <br />
            <span className="neon-pineapple">PINEAPPLE</span>
            <span className="ml-2 inline-block animate-float text-4xl sm:text-6xl">🍍</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-6 max-w-lg text-lg text-fg-muted sm:text-xl"
          >
            Hey, I'm <span className="font-semibold text-fg">Matt</span>.{" "}
            <RotatingTagline />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild variant="neon" size="lg">
              <a href={profile.links.steam} target="_blank" rel="noreferrer">
                <SteamGlyph size={16} /> Steam Profile
              </a>
            </Button>
            <Button asChild variant="grape" size="lg">
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <GithubGlyph size={16} /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">
                <Rocket /> Projects
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="#contact">
                <Mail /> Say hi
              </a>
            </Button>
          </motion.div>

          <p className="mt-6 font-mono text-xs text-fg-faint">
            psst, try the{" "}
            <span className="text-leaf">↑↑↓↓←→←→ b a</span> code. or click the
            pineapple.
          </p>
        </div>

        {/* right: visual + terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col items-center gap-6"
        >
          <PineappleLogo size={210} />
          <TerminalWidget className="w-full max-w-md" />
        </motion.div>
      </div>

      {/* scroll hint */}
      <a
        href="#gaming"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-fg-faint transition-colors hover:text-fg sm:flex"
        aria-label="Scroll down"
      >
        <span className="font-mono text-xs">scroll</span>
        <span className="animate-float text-lg">↓</span>
      </a>
    </section>
  );
}
