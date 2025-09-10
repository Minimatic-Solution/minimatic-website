import { html } from "hono/html";
import Gallery from "./gallery";

const ProjectDetailsInfo = (
  client,
  year,
  metrics,
  features,
  technologies,
  gallery,
  title
) => html` <div class="container mx-auto px-4 pt-12 space-y-12">
  <!-- Project Info -->
  <div class="text-center">
    <p class="text-muted-foreground">
      👤 Client:
      <span class="font-medium text-foreground">${client}</span>
    </p>
    <p class="text-muted-foreground">
      📅 Year:
      <span class="font-medium text-foreground">${year}</span>
    </p>
  </div>

  <!-- Metrics -->
  <div class="grid md:grid-cols-3 gap-6">
    ${metrics.map(
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
        ${features.map((f) => html`<li>${f}</li>`)}
      </ul>
    </div>
    <div>
      <h2 class="text-2xl font-semibold mb-4">🛠 Technologies</h2>
      <div class="flex flex-wrap gap-3">
        ${technologies.map(
          (t) =>
            html`<span class="px-3 py-1 rounded-full bg-muted text-sm"
              >${t}</span
            >`
        )}
      </div>
    </div>
  </div>

  <!-- Gallery Section -->
  ${Gallery(gallery, title)}
</div>`;

export default ProjectDetailsInfo;
