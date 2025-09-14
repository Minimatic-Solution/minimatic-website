import { html } from "hono/html";

interface GalleryProps {
  gallery: string[];
  title: string;
}

const Gallery = ({ gallery, title }: GalleryProps) => html`
  <section aria-labelledby="gallery-heading" class="my-12" role="region">
    <h2 id="gallery-heading" class="text-2xl font-semibold mb-6 text-center">
      📸 Project Screenshots
    </h2>

    <!-- Gallery Grid -->
    <ul class="grid md:grid-cols-3 gap-6" id="gallery-grid" role="list">
      ${gallery.map(
        (imageUrl, index) =>
          html`<li>
            <figure
              class="overflow-hidden rounded-xl shadow-lg cursor-pointer gallery-item transition-transform duration-300 hover:scale-105"
              data-index="${index}"
              data-image="${imageUrl}"
              data-title="${title}"
              tabindex="0"
              role="button"
              aria-label="Open screenshot ${index + 1} of ${gallery.length}"
            >
              <img
                src="${imageUrl}"
                alt="${title} screenshot ${index + 1}"
                class="w-full h-64 object-cover"
              />
              <figcaption class="sr-only">
                ${title} screenshot ${index + 1}
              </figcaption>
            </figure>
          </li>`
      )}
    </ul>

    <!-- Full Screen Modal -->
    <div
      id="fullscreen-modal"
      class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-image"
    >
      <!-- Close Button -->
      <button
        id="close-modal"
        class="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-50 w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-70 transition z-60 font-light"
        title="Close (Esc)"
        aria-label="Close gallery"
      >
        ✕
      </button>

      <!-- Navigation Buttons -->
      <button
        id="prev-btn"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 w-14 h-14 rounded-full flex items-center justify-center hover:bg-opacity-70 transition z-60 font-light"
        title="Previous (←)"
        aria-label="Previous image"
      >
        ‹
      </button>

      <button
        id="next-btn"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black bg-opacity-50 w-14 h-14 rounded-full flex items-center justify-center hover:bg-opacity-70 transition z-60 font-light"
        title="Next (→)"
        aria-label="Next image"
      >
        ›
      </button>

      <!-- Main Image Container -->
      <figure
        class="max-w-[90vw] max-h-[90vh] relative flex items-center justify-center"
      >
        <img
          id="modal-image"
          src=""
          alt="Expanded screenshot view"
          class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
        <figcaption
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm font-medium"
          aria-live="polite"
        >
          <span id="current-index">1</span> /
          <span id="total-images">${gallery.length}</span>
        </figcaption>
      </figure>

      <!-- Loading indicator (hidden by default) -->
      <div
        id="loading-indicator"
        class="hidden absolute inset-0 flex items-center justify-center"
        role="status"
        aria-live="polite"
      >
        <div
          class="animate-spin rounded-full h-12 w-12 border-b-2 border-white"
        ></div>
      </div>
    </div>
  </section>
`;

export default Gallery;
