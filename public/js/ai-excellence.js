// aiExcellence.js
export function initAiExcellence() {
  // Animate counters when they come into view
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-pulse");
      }
    });
  }, observerOptions);

  // Observe metric cards
  document.querySelectorAll(".metric-card").forEach((card) => {
    observer.observe(card);
  });

  // Button ripple effect
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.position = "absolute";
      ripple.style.width = size + "px";
      ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.style.background = "rgba(255, 255, 255, 0.3)";
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "ripple 0.6s ease-out forwards";
      ripple.style.pointerEvents = "none";

      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Ripple animation keyframes
  const style = document.createElement("style");
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}
