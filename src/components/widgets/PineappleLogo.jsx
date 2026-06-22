import { useState } from "react";
import { cn } from "@/lib/utils";

/*
  Animated SVG pineapple. Floats gently, glows, and reacts to clicks
  (micro easter egg: click it a few times for a wobble + secret tooltip).
*/
export function PineappleLogo({ className, size = 220 }) {
  const [clicks, setClicks] = useState(0);
  const [wobble, setWobble] = useState(false);

  const handleClick = () => {
    setClicks((c) => c + 1);
    setWobble(true);
    setTimeout(() => setWobble(false), 600);
  };

  return (
    <div
      className={cn("relative select-none", className)}
      style={{ width: size, height: size }}
    >
      {/* glow halo */}
      <div
        className="absolute inset-0 animate-pulse-glow rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,214,10,.45), rgba(168,85,247,.25) 55%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={handleClick}
        aria-label="Pineapple mascot, click me"
        title={clicks >= 5 ? "ok ok that tickles 🍍" : "psst… click me"}
        className="relative grid h-full w-full place-items-center rounded-full focus-visible:outline-none"
      >
        <svg
          viewBox="0 0 200 240"
          width={size * 0.8}
          height={size * 0.95}
          className={cn(
            "animate-float drop-shadow-[0_12px_40px_rgba(255,214,10,0.35)] transition-transform",
            wobble && "rotate-[8deg] scale-105"
          )}
          role="img"
          aria-label="A glowing neon pineapple"
        >
          {/* leaves */}
          <g
            fill="none"
            stroke="#7CFF6B"
            strokeWidth="9"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 8px rgba(124,255,107,.6))" }}
          >
            <path d="M100 78 C100 50 100 30 100 16" />
            <path d="M100 70 C84 52 70 42 54 36" />
            <path d="M100 70 C116 52 130 42 146 36" />
            <path d="M100 64 C78 56 62 52 44 54" />
            <path d="M100 64 C122 56 138 52 156 54" />
          </g>

          {/* body */}
          <defs>
            <linearGradient id="pine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FFE566" />
              <stop offset="1" stopColor="#FFB200" />
            </linearGradient>
          </defs>
          <ellipse
            cx="100"
            cy="160"
            rx="62"
            ry="72"
            fill="url(#pine)"
            stroke="#C98A00"
            strokeWidth="3"
          />
          {/* cross-hatch */}
          <g stroke="#B97E00" strokeWidth="3" strokeLinecap="round" opacity="0.55">
            <path d="M58 120 L142 198 M142 120 L58 198 M100 96 L100 230 M48 160 L152 160" />
            <path d="M70 100 L130 220 M130 100 L70 220" />
          </g>
          {/* little eyes for personality */}
          <g fill="#1a1500">
            <circle cx="84" cy="150" r="5" />
            <circle cx="116" cy="150" r="5" />
          </g>
          <path
            d="M86 168 Q100 180 114 168"
            fill="none"
            stroke="#1a1500"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
