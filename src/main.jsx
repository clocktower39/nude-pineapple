import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { consoleGreeting } from "./components/eggs/consoleGreeting.js";

// Easter egg #1: a styled hello for anyone who opens devtools.
consoleGreeting();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
