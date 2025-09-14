import { html } from "hono/html";
import Gallery from "./gallery";

interface ProjectDetailsInfoProps {
  client: string;
  year: string;
  metrics: Array<{
    label: string;
    value: string;
  }>;
  features: string[];
  technologies: string[];
  gallery: string[];
  title: string;
}

const ProjectDetailsInfo = ({
  client,
  year,
  metrics,
  features,
  technologies,
  gallery,
  title,
}: ProjectDetailsInfoProps) => html` <main
  class="container mx-auto px-4 pt-12 space-y-12"
  role="main"
>
  <!-- Project Basic Information -->
  <section class="text-center space-y-2" aria-labelledby="project-basic-info">
    <h2 id="project-basic-info" class="sr-only">Project Information</h2>

    <div
      class="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8"
    >
      <div class="flex items-center gap-2">
        <span class="text-muted-foreground" aria-hidden="true">👤</span>
        <span class="text-muted-foreground">Client:</span>
        <span class="font-medium text-foreground">${client}</span>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-muted-foreground" aria-hidden="true">📅</span>
        <span class="text-muted-foreground">Year:</span>
        <time datetime="${year}" class="font-medium text-foreground"
          >${year}</time
        >
      </div>
    </div>
  </section>

  <!-- Project Metrics -->
  <section aria-labelledby="project-metrics">
    <h2 id="project-metrics" class="sr-only">Project Metrics</h2>

    <div
      class="grid md:grid-cols-3 gap-6"
      role="list"
      aria-label="Project performance metrics"
    >
      ${metrics.map(
        (metric) => html`
          <article
            class="p-8 bg-card border rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow duration-200"
            role="listitem"
          >
            <div
              class="text-4xl font-bold text-accent mb-2"
              aria-hidden="false"
            >
              ${metric.value}
            </div>
            <div class="text-muted-foreground">${metric.label}</div>
          </article>
        `
      )}
    </div>
  </section>

  <!-- Features and Technologies Section -->
  <section class="grid lg:grid-cols-2 gap-12">
    <!-- Key Features -->
    <div>
      <h2
        id="key-features"
        class="text-2xl font-semibold mb-4 flex items-center gap-2"
      >
        <span aria-hidden="true">✨</span>
        Key Features
      </h2>

      <ul
        class="space-y-3 text-muted-foreground"
        aria-labelledby="key-features"
      >
        ${features.map(
          (feature) => html`
            <li class="flex items-start gap-2">
              <span
                class="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"
                aria-hidden="true"
              ></span>
              <span>${feature}</span>
            </li>
          `
        )}
      </ul>
    </div>

    <!-- Technologies Used -->
    <div>
      <h2
        id="technologies-used"
        class="text-2xl font-semibold mb-4 flex items-center gap-2"
      >
        <span aria-hidden="true">🛠</span>
        Technologies Used
      </h2>

      <div
        class="flex flex-wrap gap-3"
        role="list"
        aria-labelledby="technologies-used"
      >
        ${technologies.map(
          (tech) => html`
            <span
              class="px-3 py-1 rounded-full bg-muted text-sm border hover:bg-muted/80 transition-colors duration-200"
              role="listitem"
            >
              ${tech}
            </span>
          `
        )}
      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  ${Gallery({ gallery, title })}
</main>`;

export default ProjectDetailsInfo;
