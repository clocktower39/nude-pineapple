import { useTypewriter } from "@/hooks/useTypewriter";
import { terminalLines } from "@/data/profile";
import { cn } from "@/lib/utils";

/*
  A fake terminal that types short lines about Matt and loops.
  Lines starting with "$" render as green prompts; the rest as output.
*/
export function TerminalWidget({ className }) {
  const { lines, current } = useTypewriter(terminalLines, {
    speed: 34,
    linePause: 650,
  });

  const renderLine = (text, key, showCursor = false) => {
    const isPrompt = text.startsWith("$");
    return (
      <div key={key} className="whitespace-pre-wrap break-words leading-relaxed">
        {isPrompt ? (
          <span className="text-leaf">{text}</span>
        ) : (
          <span className="text-fg/90">{text}</span>
        )}
        {showCursor && (
          <span className="ml-0.5 inline-block w-2.5 animate-blink text-leaf">
            ▋
          </span>
        )}
      </div>
    );
  };

  return (
    <div className={cn("terminal-card w-full overflow-hidden", className)}>
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-leaf/15 px-3.5 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 truncate text-xs text-fg-faint">
          matt@pineapple: ~/about-me
        </span>
      </div>

      {/* body */}
      <div className="min-h-[148px] space-y-1 p-4 text-[13px] sm:text-sm">
        {lines.map((l, i) => renderLine(l, i))}
        {renderLine(current, "current", true)}
      </div>
    </div>
  );
}
