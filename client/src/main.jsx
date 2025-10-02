import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { injectSpeedInsights } from "@vercel/speed-insights";
import App from "./App.jsx";

injectSpeedInsights();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
