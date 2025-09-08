export function initNavbar() {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (!menuButton || !mobileMenu || !menuIcon || !closeIcon) return;

  menuButton.addEventListener("click", () => {
    // Toggle menu visibility
    mobileMenu.classList.toggle("hidden");

    // Toggle hamburger/close icon
    menuIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  // schedule call button
  document.querySelectorAll(".schedule-call-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      window.open("https://calendly.com/takiuddinahmed-ciyp", "_blank");
    });
  });
}
