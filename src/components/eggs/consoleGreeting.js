/* Styled console greeting for the curious dev who opens devtools. */
export function consoleGreeting() {
  if (typeof console === "undefined") return;
  const big = [
    "color:#ffd60a",
    "font-size:22px",
    "font-weight:700",
    "font-family:monospace",
    "text-shadow:0 0 12px rgba(255,214,10,.6)",
  ].join(";");
  const small = "color:#7cff6b;font-family:monospace;font-size:13px";
  const muted = "color:#a6a6b8;font-family:monospace;font-size:12px";

  console.log("%c🍍 NUDE PINEAPPLE", big);
  console.log("%cWell well well, a fellow person-who-opens-devtools.", small);
  console.log(
    "%cBuilt with Vite + React. Try the Konami code on the page. ↑↑↓↓←→←→ b a",
    muted
  );
  console.log("%cmatt@mattkearns.dev — say hi 👋", muted);
}
