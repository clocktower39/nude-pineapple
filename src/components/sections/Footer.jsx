import { Mail } from "lucide-react";
import { GithubGlyph, SteamGlyph } from "@/components/icons/Brand";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { profile } from "@/data/profile";

// Only render links that actually exist (null = hidden until you add it).
function buildSocials() {
  const { links } = profile;
  return [
    links.github && {
      label: "GitHub",
      href: links.github,
      icon: <GithubGlyph size={18} />,
      external: true,
    },
    links.steam && {
      label: "Steam",
      href: links.steam,
      icon: <SteamGlyph />,
      external: true,
    },
    links.email && {
      label: "Email",
      href: `mailto:${links.email}`,
      icon: <Mail size={18} />,
      external: false,
    },
  ].filter(Boolean);
}

export function Footer() {
  const socials = buildSocials();
  const year = 2026; // bump as needed - kept static (no Date in this env)

  return (
    <footer
      id="contact"
      className="relative mt-10 border-t border-white/10 px-5 py-16 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="glass-card relative overflow-hidden p-8 sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-pineapple/15 blur-3xl"
          />
          <p className="font-mono text-sm text-leaf">
            <span className="text-fg-faint">{"$ "}</span>./say-hello.sh
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold sm:text-4xl">
            Wanna build something weird,{" "}
            <span className="neon-pineapple">talk shop</span>, or argue about
            agents?
          </h2>
          <p className="mt-4 max-w-xl text-fg-muted">
            I'm always down to chat dev, gaming, homelabs, or cheer. Slide into
            an inbox or add me on Steam. Fair warning, I will absolutely talk
            your ear off about Halo or my homelab.
          </p>

          <TooltipProvider delayDuration={150}>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="neon" size="lg">
                <a href={`mailto:${profile.links.email}`}>
                  <Mail /> {profile.links.email}
                </a>
              </Button>
              {socials.map((s) => (
                <Tooltip key={s.label}>
                  <TooltipTrigger asChild>
                    <Button asChild variant="outline" size="icon">
                      <a
                        href={s.href}
                        aria-label={s.label}
                        {...(s.external
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                      >
                        {s.icon}
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{s.label}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>

        {/* bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 text-center text-xs text-fg-faint sm:flex-row sm:text-left">
          <p className="font-mono">
            © {year} {profile.domain} · handcrafted with React, caffeine & zero
            chill.
          </p>
          <p className="font-mono">
            no pineapples were harmed 🍍 · made by {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
