export function initContact() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Simple validation
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.projectType ||
      !data.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Simulate form submission
    const button = e.target.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    button.innerHTML = "Sending...";
    button.disabled = true;

    setTimeout(() => {
      button.innerHTML =
        '<span class="text-green-400">Message Sent!</span>' +
        '<svg class="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
        '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>' +
        "</svg>";

      // Reset form after 3 seconds
      setTimeout(() => {
        e.target.reset();
        button.innerHTML = originalText;
        button.disabled = false;
      }, 3000);
    }, 2000);
  });

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease";
    observer.observe(el);
  });
}
