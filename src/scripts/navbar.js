export function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const mobileOverlay = document.querySelector(".mobile-menu-overlay");
  const mobileLinks = document.querySelectorAll(".mobile-menu-link");

  let isScrolled = false;
  const onScroll = () => {
    const shouldScroll = window.scrollY > 50;
    if (shouldScroll !== isScrolled) {
      isScrolled = shouldScroll;
      navbar?.classList.toggle("scrolled", isScrolled);
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (mobileBtn && mobileOverlay) {
    const setMenuState = (isOpen) => {
      mobileBtn.classList.toggle("active", isOpen);
      mobileOverlay.classList.toggle("active", isOpen);
      mobileBtn.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    };

    mobileBtn.addEventListener("click", () => {
      const isOpen = !mobileOverlay.classList.contains("active");
      setMenuState(isOpen);
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        setMenuState(false);
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileOverlay.classList.contains("active")) {
        setMenuState(false);
      }
    });

    mobileOverlay.addEventListener("click", (e) => {
      if (e.target === mobileOverlay) {
        setMenuState(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900 && mobileOverlay.classList.contains("active")) {
        setMenuState(false);
      }
    });
  }
}
