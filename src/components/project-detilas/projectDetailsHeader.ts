import { html } from "hono/html";

const ProjectDetailsHeader = (
  image,
  title,
  logo,
  description,
  previewUrl
) => html` <div class="relative h-[400px] lg:h-[500px] overflow-hidden">
  <img
    src="${image}"
    alt="${title}"
    class="absolute inset-0 w-full h-full object-cover"
  />
  <div class="absolute inset-0 bg-black/80"></div>
  <div
    class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
  >
    <img
      src="${logo}"
      alt="${title} logo"
      class="h-16 w-16 object-contain mb-6 bg-white rounded-xl  shadow-lg"
    />
    <h1 class="text-4xl lg:text-6xl font-bold mb-4">${title}</h1>
    <p class="text-lg max-w-2xl">${description}</p>
    <a
      href="${previewUrl}"
      target="_blank"
      class="mt-6 inline-block bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition"
    >
      🔗 Live Preview
    </a>
  </div>
</div>`;
export default ProjectDetailsHeader;
