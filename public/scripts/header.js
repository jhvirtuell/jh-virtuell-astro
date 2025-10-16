// /scripts/header.js
document.addEventListener("DOMContentLoaded", () => {
  const header   = document.getElementById("site-header");
  const btn      = document.getElementById("menu-toggle");
  const menu     = document.getElementById("mobile-menu");   // bg-black (voll deckend)
  const panel    = document.getElementById("mobile-panel");  // Slide-in Panel
  const burgerX  = document.getElementById("burger-x");

  if (!btn || !menu || !panel || !burgerX) return;

  let isOpen = false;

  function morphHamburger(open) {
    const [l1, l2, l3] = burgerX.children;
    if (open) {
      l1.setAttribute('d', 'M9 9L23 23');
      l2.setAttribute('d', '');
      l3.setAttribute('d', 'M9 23L23 9');
    } else {
      l1.setAttribute('d', 'M8 10h16');
      l2.setAttribute('d', 'M8 16h16');
      l3.setAttribute('d', 'M8 22h16');
    }
    burgerX.style.stroke = "#d4af37";
  }

  const lockScroll = (on) => {
    document.documentElement.classList.toggle("overflow-hidden", on);
    document.body.classList.toggle("overflow-hidden", on);
  };

  const openMenu = () => {
    menu.classList.remove("pointer-events-none", "opacity-0");
    menu.classList.add("opacity-100");
    // Panel rein
    requestAnimationFrame(() => panel.classList.remove("translate-x-[-100%]"));
    // ARIA + Scroll
    btn.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
    lockScroll(true);
    isOpen = true;
    morphHamburger(true);
  };

  const closeMenu = () => {
    // Panel raus
    panel.classList.add("translate-x-[-100%]");
    setTimeout(() => {
      menu.classList.add("pointer-events-none", "opacity-0");
      menu.classList.remove("opacity-100");
      lockScroll(false);
    }, 300);
    btn.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    isOpen = false;
    morphHamburger(false);
  };

  btn.addEventListener("click", () => (isOpen ? closeMenu() : openMenu()));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && isOpen) closeMenu(); });
  menu.addEventListener("click", (e) => { if (e.target === menu) closeMenu(); });
  panel.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

  // Desktop Sticky-Header Farblogik (falls gewünscht)
  const setSticky = () => {
    const scrolled = window.scrollY > 30;
    header.classList.toggle("bg-dark", !scrolled);
    header.classList.toggle("text-white", !scrolled);
    header.classList.toggle("bg-white", scrolled);
    header.classList.toggle("text-dark", scrolled);
    header.classList.toggle("shadow-lg", scrolled);
    header.classList.toggle("border-b", scrolled);
    btn.style.color = "#d4af37";
  };
  setSticky();
  window.addEventListener("scroll", setSticky);
});