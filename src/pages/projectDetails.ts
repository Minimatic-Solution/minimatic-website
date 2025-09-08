import { html } from "hono/html";
import projects from "../data/projects.json" assert { type: "json" };

const ProjectDetails = (id: string) => {
  const project = projects.find((p) => p.id === id);
  if (!project)
    return html`<p class="text-center py-16">❌ Project not found.</p>`;

  return html`
    <section class="pb-16">
      <!-- Hero Section -->
      <div
        class="relative h-[400px] lg:h-[500px] overflow-hidden rounded-b-3xl"
      >
        <img
          src="${project.image}"
          alt="${project.title}"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
        <div
          class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
        >
          <img
            src="${project.logo}"
            alt="${project.title} logo"
            class="h-16 w-16 object-contain mb-6 bg-white rounded-xl p-2 shadow-lg"
          />
          <h1 class="text-4xl lg:text-6xl font-bold mb-4">${project.title}</h1>
          <p class="text-lg max-w-2xl">${project.description}</p>
          <a
            href="${project.previewUrl}"
            target="_blank"
            class="mt-6 inline-block bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition"
          >
            🔗 Live Preview
          </a>
        </div>
      </div>

      <!-- Wrapped Content (Info + Metrics + Features + Gallery) -->
      <div class="container mx-auto px-4 pt-12 space-y-12">
        <!-- Project Info -->
        <div class="text-center">
          <p class="text-muted-foreground">
            👤 Client:
            <span class="font-medium text-foreground">${project.client}</span>
          </p>
          <p class="text-muted-foreground">
            📅 Year:
            <span class="font-medium text-foreground">${project.year}</span>
          </p>
        </div>

        <!-- Metrics -->
        <div class="grid md:grid-cols-3 gap-6">
          ${project.metrics.map(
            (m) => html`
              <div
                class="p-8 bg-card border rounded-2xl text-center shadow-sm hover:shadow-md transition"
              >
                <p class="text-4xl font-bold text-accent">${m.value}</p>
                <p class="text-muted-foreground mt-2">${m.label}</p>
              </div>
            `
          )}
        </div>

        <!-- Features & Technologies -->
        <div class="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-semibold mb-4">✨ Key Features</h2>
            <ul class="list-disc pl-6 space-y-2 text-muted-foreground">
              ${project.features.map((f) => html`<li>${f}</li>`)}
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-semibold mb-4">🛠 Technologies</h2>
            <div class="flex flex-wrap gap-3">
              ${project.technologies.map(
                (t) =>
                  html`<span class="px-3 py-1 rounded-full bg-muted text-sm"
                    >${t}</span
                  >`
              )}
            </div>
          </div>
        </div>

        <!-- Gallery -->
        <div>
          <h2 class="text-2xl font-semibold mb-6 text-center">
            📸 Project Screenshots
          </h2>
          <div class="grid md:grid-cols-3 gap-6">
            ${project.gallery.map(
              (g) =>
                html`<div
                  class="overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition"
                >
                  <img
                    src="${g}"
                    alt="${project.title} screenshot"
                    class="w-full h-full object-cover"
                  />
                </div>`
            )}
          </div>
        </div>
      </div>
    </section>
  `;
};

export default ProjectDetails;
