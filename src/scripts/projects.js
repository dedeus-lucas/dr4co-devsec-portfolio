import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initHorizontalProjectsScroll() {
  const pinWrapper = document.querySelector(".projects-pin-wrapper");
  const track = document.querySelector(".projects-track");

  if (!pinWrapper || !track) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 901px)", () => {
    const getScrollAmount = () => {
      return track.scrollWidth - window.innerWidth + 140;
    };

    const tween = gsap.to(track, {
      x: () => -getScrollAmount(),
      ease: "none",
      scrollTrigger: {
        trigger: pinWrapper,
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween.kill();
      gsap.set(track, { clearProps: "transform" });
    };
  });
}
