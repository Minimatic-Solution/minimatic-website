export function initGallery() {
  const modal = document.getElementById("fullscreen-modal");
  const modalImage = document.getElementById("modal-image");
  const closeBtn = document.getElementById("close-modal");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const currentIndexSpan = document.getElementById("current-index");
  const galleryItems = document.querySelectorAll(".gallery-item");

  // Check if gallery elements exist
  if (
    !modal ||
    !modalImage ||
    !closeBtn ||
    !prevBtn ||
    !nextBtn ||
    !currentIndexSpan ||
    galleryItems.length === 0
  ) {
    return;
  }

  let currentImageIndex = 0;
  let images = [];
  let imageTitle = "";

  // Extract images data from gallery items
  galleryItems.forEach((item, index) => {
    const imageUrl = item.getAttribute("data-image");
    const title = item.getAttribute("data-title") || "Project Screenshot";

    if (imageUrl) {
      images.push(imageUrl);
      if (index === 0) imageTitle = title;
    }
  });

  // Open modal function
  function openModal(index) {
    if (index < 0 || index >= images.length) return;

    currentImageIndex = index;
    modalImage.src = images[index];
    modalImage.alt = `${imageTitle} screenshot ${index + 1}`;
    currentIndexSpan.textContent = index + 1;

    modal.classList.remove("opacity-0", "pointer-events-none");
    modal.classList.add("opacity-100");
    document.body.style.overflow = "hidden";
  }

  // Close modal function
  function closeModal() {
    modal.classList.add("opacity-0", "pointer-events-none");
    modal.classList.remove("opacity-100");
    document.body.style.overflow = "auto";
  }

  // Navigate to next image
  function nextImage() {
    if (images.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    openModal(currentImageIndex);
  }

  // Navigate to previous image
  function prevImage() {
    if (images.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    openModal(currentImageIndex);
  }

  // Event listeners for gallery items
  galleryItems.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(index);
    });

    // Add hover effect
    item.addEventListener("mouseenter", () => {
      item.style.transform = "scale(1.02)";
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "scale(1)";
    });
  });

  // Close button event listener
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal();
  });

  // Navigation buttons event listeners
  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    nextImage();
  });

  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    prevImage();
  });

  // Close modal when clicking outside image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Prevent modal from closing when clicking on image or controls
  modalImage.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Keyboard navigation
  function handleKeydown(e) {
    if (!modal.classList.contains("pointer-events-none")) {
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          closeModal();
          break;
        case "ArrowLeft":
          e.preventDefault();
          prevImage();
          break;
        case "ArrowRight":
          e.preventDefault();
          nextImage();
          break;
        case "Space":
          e.preventDefault();
          nextImage();
          break;
      }
    }
  }

  // Add keyboard event listener
  document.addEventListener("keydown", handleKeydown);

  // Touch/swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  modalImage.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  modalImage.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left - next image
        nextImage();
      } else {
        // Swiped right - previous image
        prevImage();
      }
    }
  }

  // Preload images for better performance
  function preloadImages() {
    images.forEach((imageUrl, index) => {
      if (index !== currentImageIndex) {
        const img = new Image();
        img.src = imageUrl;
      }
    });
  }

  // Initialize preloading
  if (images.length > 0) {
    preloadImages();
  }

  // Update total images count
  const totalImagesSpan = document.getElementById("total-images");
  if (totalImagesSpan) {
    totalImagesSpan.textContent = images.length;
  }

  // Handle window resize
  function handleResize() {
    if (!modal.classList.contains("pointer-events-none")) {
      // Adjust modal image size if needed
      const maxWidth = window.innerWidth * 0.9;
      const maxHeight = window.innerHeight * 0.9;

      modalImage.style.maxWidth = maxWidth + "px";
      modalImage.style.maxHeight = maxHeight + "px";
    }
  }

  window.addEventListener("resize", handleResize);

  // Cleanup function (optional - for when component unmounts)
  function cleanup() {
    document.removeEventListener("keydown", handleKeydown);
    window.removeEventListener("resize", handleResize);
  }

  // Return cleanup function if needed
  return cleanup;
}
