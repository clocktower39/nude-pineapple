import { cn } from "@/lib/utils";

/*
  Steam-style status pill.
  status: "in-game" | "online" | "away" | "offline"
*/
const STATUS = {
  "in-game": { label: "In-Game", color: "#90ba3c", glow: "rgba(144,186,60,.6)" },
  online: { label: "Online", color: "#57cbde", glow: "rgba(87,203,222,.6)" },
  away: { label: "Away", color: "#ffd60a", glow: "rgba(255,214,10,.5)" },
  offline: { label: "Offline", color: "#7a7a8c", glow: "rgba(122,122,140,.4)" },
};

export function SteamStatusBadge({ status = "online", game, className }) {
  const s = STATUS[status] ?? STATUS.online;
  const label = status === "in-game" && game ? game : s.label;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-mono",
        className
      )}
      style={{
        color: s.color,
        borderColor: `${s.color}55`,
        background: `${s.color}14`,
      }}
    >
      <span
        className="relative flex h-2 w-2"
        aria-hidden="true"
      >
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
          style={{ background: s.color }}
        />
        <span
          className="relative inline-flex h-2 w-2 rounded-full"
          style={{ background: s.color, boxShadow: `0 0 8px ${s.glow}` }}
        />
      </span>
      {status === "in-game" ? `Playing ${label}` : label}
    </span>
  );
}
