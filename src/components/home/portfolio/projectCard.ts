import { html } from "hono/html";

interface IMetric {
  value: string | number;
  label: string;
}

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  metrics: IMetric[];
}

const ProjectCard = ({
  image,
  title,
  description,
  metrics,
}: ProjectCardProps) => html`
  <article
    class="group contact-card shadow-lg rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full scroll-reveal"
    role="article"
    aria-labelledby="project-${title.toLowerCase().replace(/\s+/g, "-")}"
  >
    <!-- Image -->
    <figure class="relative aspect-[16/9] overflow-hidden">
      <img
        src="${image}"
        alt="${title} project screenshot"
        class="w-full h-full object-center transform group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        width="400"
        height="225"
      />
    </figure>

    <!-- Content -->
    <div class="p-6 lg:p-8 flex flex-col grow">
      <h3
        id="project-${title.toLowerCase().replace(/\s+/g, "-")}"
        class="text-2xl font-bold text-foreground mb-3"
      >
        ${title}
      </h3>
      <p class="text-muted-foreground mb-6 leading-relaxed flex-grow">
        ${description}
      </p>

      <!-- Metrics -->
      <section
        class="grid grid-cols-3 gap-4 text-center mt-auto"
        aria-label="Project metrics and achievements"
        role="region"
      >
        <h4 class="sr-only">Project Performance Metrics</h4>
        ${metrics.map(
          (m: IMetric) => html`
            <div role="img" aria-label="${m.value} ${m.label}">
              <div class="text-2xl font-bold text-primary">${m.value}</div>
              <div class="text-sm text-muted-foreground">${m.label}</div>
            </div>
          `
        )}
      </section>
    </div>
  </article>
`;

export default ProjectCard;
