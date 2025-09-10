import { html } from "hono/html";

const Gallery = (gallery, title) => html`
  <div>
    <h2 class="text-2xl font-semibold mb-6 text-center">
      📸 Project Screenshots
    </h2>

    <!-- Gallery Grid -->
    <div class="grid md:grid-cols-3 gap-6" id="gallery-grid">
      ${gallery.map(
        (imageUrl, index) =>
          html`<div
            class="overflow-hidden rounded-xl shadow-lg cursor-pointer gallery-item transition-transform duration-300 hover:scale-105"
            data-index="${index}"
            data-image="${imageUrl}"
            data-title="${title}"
          >
            <img
              src="${imageUrl}"
              alt="${title} screenshot ${index + 1}"
              class="w-full h-64 object-cover"
            />
          </div>`
      )}
    </div>

    <!-- Full Screen Modal -->
    <div
      id="fullscreen-modal"
      class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300"
    >
      <!-- Close Button -->
      <button
        id="close-modal"
        class="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-50 w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-70 transition z-60 font-light"
        title="Close (Esc)"
      >
        ✕
      </button>

      <!-- Navigation Buttons -->
      <button
        id="prev-btn"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 w-14 h-14 rounded-full flex items-center justify-center hover:bg-opacity-70 transition z-60 font-light"
        title="Previous (←)"
      >
        ‹
      </button>

      <button
        id="next-btn"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 w-14 h-14 rounded-full flex items-center justify-center hover:bg-opacity-70 transition z-60 font-light"
        title="Next (→)"
      >
        ›
      </button>

      <!-- Main Image Container -->
      <div
        class="max-w-[90vw] max-h-[90vh] relative flex items-center justify-center"
      >
        <img
          id="modal-image"
          src=""
          alt=""
          class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />

        <!-- Image Counter -->
        <div
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm font-medium"
        >
          <span id="current-index">1</span> /
          <span id="total-images">${gallery.length}</span>
        </div>
      </div>

      <!-- Loading indicator (hidden by default) -->
      <div
        id="loading-indicator"
        class="hidden absolute inset-0 flex items-center justify-center"
      >
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-white"
        ></div>
      </div>
    </div>
  </div>
`;

export default Gallery;
