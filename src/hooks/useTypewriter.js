import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/*
  Types an array of lines one character at a time, then loops.
  - Respects prefers-reduced-motion (shows all lines instantly, no loop).
  - Returns { lines, current, done } so the UI can render history + cursor.
*/
export function useTypewriter(
  source,
  { speed = 38, linePause = 750, loop = true } = {}
) {
  const reduced = useReducedMotion();
  const [lines, setLines] = useState([]); // completed lines
  const [current, setCurrent] = useState(""); // line being typed
  const [done, setDone] = useState(false);
  const timers = useRef([]);

  useEffect(() => {
    // Clear any pending timers on re-run/unmount.
    const clearAll = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    clearAll();
    setLines([]);
    setCurrent("");
    setDone(false);

    if (reduced) {
      setLines(source);
      setDone(true);
      return clearAll;
    }

    let lineIdx = 0;
    let charIdx = 0;

    const tick = () => {
      const line = source[lineIdx] ?? "";
      if (charIdx <= line.length) {
        setCurrent(line.slice(0, charIdx));
        charIdx += 1;
        timers.current.push(setTimeout(tick, speed));
      } else {
        // Line finished - commit it and move on after a pause.
        setLines((prev) => [...prev, line]);
        setCurrent("");
        lineIdx += 1;
        charIdx = 0;
        if (lineIdx >= source.length) {
          if (loop) {
            timers.current.push(
              setTimeout(() => {
                setLines([]);
                lineIdx = 0;
                tick();
              }, linePause * 2.5)
            );
          } else {
            setDone(true);
          }
          return;
        }
        timers.current.push(setTimeout(tick, linePause));
      }
    };

    timers.current.push(setTimeout(tick, 400));
    return clearAll;
  }, [source, speed, linePause, loop, reduced]);

  return { lines, current, done };
}
