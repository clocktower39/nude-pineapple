import { useEffect, useState } from "react";
import { useKonami } from "@/hooks/useKonami";

/*
  Easter egg: Konami code → a shower of pineapples falls from the top.
  Self-cleaning; renders nothing until unlocked.
*/

const EMOJIS = ["🍍", "🍍", "🍍", "✨", "🥽", "🤖"];

function makeDrops() {
  // Deterministic-ish spread without Math.random dependency concerns.
  return Array.from({ length: 36 }, (_, i) => ({
    id: i,
    left: (i * 2.73) % 100, // spread across the width
    delay: (i % 12) * 0.18,
    duration: 3 + ((i * 7) % 5) * 0.6,
    size: 22 + ((i * 13) % 28),
    emoji: EMOJIS[i % EMOJIS.length],
  }));
}

export function KonamiEgg() {
  const [active, setActive] = useState(false);
  const [drops, setDrops] = useState([]);
  const [toast, setToast] = useState(false);

  useKonami(() => {
    setDrops(makeDrops());
    setActive(true);
    setToast(true);
  });

  useEffect(() => {
    if (!active) return;
    const t1 = setTimeout(() => setActive(false), 6000);
    const t2 = setTimeout(() => setToast(false), 3200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
      aria-hidden="true"
    >
      {drops.map((d) => (
        <span
          key={d.id}
          className="absolute -top-16 select-none"
          style={{
            left: `${d.left}%`,
            fontSize: `${d.size}px`,
            animation: `fall ${d.duration}s linear ${d.delay}s forwards`,
          }}
        >
          {d.emoji}
        </span>
      ))}

      {toast && (
        <div className="absolute left-1/2 top-24 -translate-x-1/2">
          <div className="terminal-card px-4 py-2 text-sm text-leaf">
            🍍 cheat code accepted. maximum pineapple unlocked
          </div>
        </div>
      )}
    </div>
  );
}
