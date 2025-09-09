import { html } from "hono/html";
import projects from "../../../data/projects.json" assert { type: "json" };
import PortfolioHeader from "./portfolioHeader";
import ProjectCard from "./projectCard";

const Portfolio = () => html`
  <section id="portfolio" class="py-16 lg:py-24 bg-gray-100">
    <div class="container mx-auto px-4">
      ${PortfolioHeader()}

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
