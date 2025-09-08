import { html } from "hono/html";
import projects from "../../data/projects.json" assert { type: "json" };
import ProjectCard from "./portfolio/projectCard";

const Portfolio = () => html`
  <section id="portfolio" class="py-16 lg:py-24">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-4xl mx-auto mb-16">
        <h1 class="text-4xl lg:text-6xl font-bold text-foreground mb-6">
          Our Projects
        </h1>
        <p class="text-lg lg:text-xl text-muted-foreground leading-relaxed">
          Discover how we've transformed businesses through innovative software
          solutions. Each project represents our commitment to excellence,
          technical expertise, and client success.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${projects.map(
          (p) => html`
            <a href="/projects/${p.id}" class="block hover:no-underline">
              ${ProjectCard({
                image: p.image,
                logo: p.logo,
                title: p.title,
                description: p.description,
                metrics: p.metrics,
              })}
            </a>
          `
        )}
      </div>
    </div>
  </section>
`;

export default Portfolio;
