import "./styles/variables.css";
import "./styles/reset.css";
import "./styles/cursor.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/manifesto.css";
import "./styles/journey.css";
import "./styles/projects.css";
import "./styles/services.css";
import "./styles/contact.css";

import { initSmoothScroll } from "./scripts/lenis.js";
import { initHudCursor } from "./scripts/cursor.js";
import { initNavbarScroll } from "./scripts/navbar.js";
import { initManifestoAnimations } from "./scripts/manifesto.js";
import { initHudBackground } from "./scripts/hud-background.js";
import { initHorizontalProjectsScroll } from "./scripts/projects.js";
import { initI18n } from "./scripts/i18n.js";
import { initFooterYear } from "./scripts/footer-year.js";

document.addEventListener("DOMContentLoaded", () => {
  initSmoothScroll();
  initHudCursor();
  initNavbarScroll();
  initManifestoAnimations();
  initHudBackground();
  initHorizontalProjectsScroll();
  initI18n();
  initFooterYear();

  console.log("[SYSTEM] Shield Protocol operational with Ghost in the Shell HUD overlays.");
});
