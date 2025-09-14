import { html } from "hono/html";

interface ProjectDetailsHeaderProps {
  image: string;
  title: string;
  logo: string;
  description: string;
  previewUrl: string;
}

const ProjectDetailsHeader = ({
  image,
  title,
  logo,
  description,
  previewUrl,
}: ProjectDetailsHeaderProps) => html` <header
  class="relative h-[400px] lg:h-[500px] overflow-hidden"
  role="banner"
  aria-labelledby="project-title"
>
  <!-- Hero Background Image -->
  <div class="absolute inset-0">
    <img
      src="${image}"
      alt="${title} project background image"
      role="presentation"
      class="w-full h-full object-cover"
      loading="eager"
      decoding="async"
    />
    <!-- Overlay for better text contrast -->
    <div class="absolute inset-0 bg-black/80" aria-hidden="true"></div>
  </div>

  <!-- Main Content -->
  <div
    class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 py-8"
  >
    <!-- Project Logo -->
    <div class="mb-6">
      <img
        src="${logo}"
        alt="${title} project logo"
        class="h-16 w-16 object-contain bg-white rounded-xl shadow-lg"
        loading="eager"
        decoding="async"
        width="64"
        height="64"
      />
    </div>

    <!-- Project Title -->
    <h1
      id="project-title"
      class="text-4xl lg:text-6xl font-bold mb-4 leading-tight"
    >
      ${title}
    </h1>

    <!-- Project Description -->
    <p class="text-lg max-w-2xl mb-6 leading-relaxed text-gray-200">
      ${description}
    </p>

    <!-- Call to Action -->
    <div class="mt-2">
      <a
        href="${previewUrl}"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black transition-colors duration-200"
        aria-describedby="preview-description"
      >
        <span aria-hidden="true">🔗</span>
        Live Preview
      </a>
      <div id="preview-description" class="sr-only">
        Opens ${title} project preview in a new tab
      </div>
    </div>
  </div>
</header>`;

export default ProjectDetailsHeader;
