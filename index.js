document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".marquee-inner");
  const clones = container.cloneNode(true);
  container.appendChild(clones);

  let scrollAmount = 0;
  let isPaused = false;

  function marqueeScroll() {
    if (!isPaused) {
      scrollAmount += 1; // speed
      container.style.transform = `translateX(-${scrollAmount}px)`;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
    }
    requestAnimationFrame(marqueeScroll);
  }
  marqueeScroll();

  const wrapper = document.querySelector(".marquee-wrapper");
  wrapper.addEventListener("mouseenter", () => isPaused = true);
  wrapper.addEventListener("mouseleave", () => isPaused = false);
});