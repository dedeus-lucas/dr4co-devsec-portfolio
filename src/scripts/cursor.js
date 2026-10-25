import { gsap } from "gsap";

export function initHudCursor() {
  const isFinePointer = window.matchMedia("(pointer: fine) and (min-width: 769px)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const cursorWrapper = document.querySelector(".hud-cursor-wrapper");
  if (!cursorWrapper) return;

  if (!isFinePointer || prefersReducedMotion) {
    cursorWrapper.style.display = "none";
    document.body.classList.remove("cursor-hover");
    return;
  }

  const cursorDot = document.querySelector(".hud-cursor-dot");
  const cursorRing = document.querySelector(".hud-cursor-ring");
  if (!cursorDot || !cursorRing) return;

  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  const tickerCallback = () => {
    const dt = 1 - Math.pow(1 - 0.2, gsap.ticker.deltaRatio());
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;

    gsap.set(cursorDot, { x: mouse.x, y: mouse.y });
    gsap.set(cursorRing, { x: pos.x, y: pos.y });
  };

  gsap.ticker.add(tickerCallback);

  document.addEventListener("mouseover", (e) => {
    if (e.target.closest('a, button, [data-cursor="hover"]')) {
      document.body.classList.add("cursor-hover");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest('a, button, [data-cursor="hover"]')) {
      document.body.classList.remove("cursor-hover");
    }
  });
}
