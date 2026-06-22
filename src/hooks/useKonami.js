import { useEffect, useRef } from "react";

const SEQUENCE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

/** Fires `onUnlock` when the Konami code is entered. */
export function useKonami(onUnlock) {
  const pos = useRef(0);

  useEffect(() => {
    const handler = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === SEQUENCE[pos.current]) {
        pos.current += 1;
        if (pos.current === SEQUENCE.length) {
          pos.current = 0;
          onUnlock?.();
        }
      } else {
        // Allow a wrong key to restart the sequence if it matches step 0.
        pos.current = key === SEQUENCE[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onUnlock]);
}
