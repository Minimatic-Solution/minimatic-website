import { html } from "hono/html";
import projects from "../data/projects.json" assert { type: "json" };

const ProjectDetails = (id: string) => {
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return html`<div class="container mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold text-red-500">Project not found</h2>
    </div>`;
  }

  return html`
    <section class="py-16 lg:py-24">
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="mb-8">
          <img
            src="${project.image}"
            alt="${project.title}"
            class="w-full rounded-2xl shadow-lg mb-6"
          />
          <h1 class="text-4xl font-bold mb-4">${project.title}</h1>
          <p class="text-lg text-muted-foreground leading-relaxed mb-8">
            ${project.description}
          </p>
        </div>

        <div class="grid grid-cols-3 gap-6 mb-12">
          ${project.metrics.map(
            (m) => html`
              <div class="text-center">
                <div class="text-2xl font-bold text-primary">${m.value}</div>
                <div class="text-sm text-muted-foreground">${m.label}</div>
              </div>
            `
          )}
        </div>

        <a
          href="${project.previewUrl}"
          target="_blank"
          class="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
        >
          🔗 Live Preview
        </a>
      </div>
    </section>
  `;
};

export default ProjectDetails;
