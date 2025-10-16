document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollTopBtn");
  let showBtn = false;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
      if (!showBtn) {
        scrollBtn.classList.remove("hidden");
        setTimeout(() => {
          scrollBtn.classList.remove("opacity-0", "pointer-events-none");
          showBtn = true;
        }, 10);
      }
    } else {
      scrollBtn.classList.add("opacity-0", "pointer-events-none");
      setTimeout(() => {
        if (window.scrollY < 100) scrollBtn.classList.add("hidden");
        showBtn = false;
      }, 250);
    }
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});