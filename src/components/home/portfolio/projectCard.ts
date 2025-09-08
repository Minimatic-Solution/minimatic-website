import { html } from "hono/html";

const ProjectCard = ({ image, logo, title, description, metrics }) => html`
  <div
    class="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
  >
    <!-- Image -->
    <div class="relative aspect-[16/9] overflow-hidden">
      <img
        src="${image}"
        alt="${title}"
        class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
      ></div>
      <img
        src="${logo}"
        alt="${title} Logo"
        class="absolute bottom-4 left-4 h-12 w-12 object-contain"
      />
    </div>

    <!-- Content -->
    <div class="p-6 lg:p-8 flex flex-col grow">
      <h3 class="text-2xl font-bold text-foreground mb-3">${title}</h3>
      <p class="text-muted-foreground mb-6 leading-relaxed flex-grow">
        ${description}
      </p>

      <!-- Metrics -->
      <div class="grid grid-cols-3 gap-4 text-center mt-auto">
        ${metrics.map(
          (m) => html`
            <div>
              <div class="text-2xl font-bold text-primary">${m.value}</div>
              <div class="text-sm text-muted-foreground">${m.label}</div>
            </div>
          `
        )}
      </div>
    </div>
  </div>
`;

export default ProjectCard;
