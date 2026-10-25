import { gsap } from "gsap";

export function initHudCursor() {
  // Desativa a execução do HUD Cursor em telas touch ou telas menores que 768px
  const isTouchOrMobile =
    window.matchMedia("(max-width: 768px)").matches ||
    window.matchMedia("(pointer: coarse)").matches;

  if (isTouchOrMobile) {
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

  gsap.ticker.add(() => {
    const dt = 1 - Math.pow(1 - 0.2, gsap.ticker.deltaRatio());
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;

    gsap.set(cursorDot, { x: mouse.x, y: mouse.y });
    gsap.set(cursorRing, { x: pos.x, y: pos.y });
  });

  const interactiveElements = document.querySelectorAll('a, button, [data-cursor="hover"]');

  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });
}
