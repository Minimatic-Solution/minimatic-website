import { html } from "hono/html";

interface IMetric {
  value: string | number;
  label: string;
}

interface ProjectCardProps {
  image: string;
  logo?: string;
  title: string;
  description: string;
  metrics: IMetric[];
}

const ProjectCard = ({
  image,
  logo,
  title,
  description,
  metrics,
}: ProjectCardProps) => html`
  <div
    class="group contact-card shadow-lg rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full scroll-reveal"
  >
    <!-- Image -->
    <div class="relative aspect-[16/9] overflow-hidden">
      <img
        src="${image}"
        alt="${title}"
        class="w-full h-full object-center transform group-hover:scale-105 transition-transform duration-500"
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
          (m: IMetric) => html`
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
