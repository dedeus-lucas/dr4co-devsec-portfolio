export function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const mobileOverlay = document.querySelector(".mobile-menu-overlay");
  const mobileLinks = document.querySelectorAll(".mobile-menu-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  if (mobileBtn && mobileOverlay) {
    mobileBtn.addEventListener("click", () => {
      mobileBtn.classList.toggle("active");
      mobileOverlay.classList.toggle("active");

      if (mobileOverlay.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileBtn.classList.remove("active");
        mobileOverlay.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }
}
