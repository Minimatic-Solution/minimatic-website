import { html } from "hono/html";
import projects from "../../../data/projects.json" assert { type: "json" };
import PortfolioHeader from "./portfolioHeader";
import ProjectCard from "./projectCard";

const Portfolio = () => html`
  <section
    id="portfolio"
    class="py-16 lg:py-24 bg-gray-100"
    role="region"
    aria-labelledby="portfolio-title"
  >
    <div class="container mx-auto px-4">
      ${PortfolioHeader()}

      <div
        class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        role="list"
        aria-label="Portfolio projects gallery"
      >
        ${projects.map(
          (p, index) => html`
            <div role="listitem">
              <a
                href="/projects/${p.id}"
                class="block hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-2xl transition-all"
                aria-label="View details of ${p.title} project"
                tabindex="0"
              >
                ${ProjectCard({
                  image: p.image,
                  logo: p.logo,
                  title: p.title,
                  description: p.description,
                  metrics: p.metrics,
                })}
              </a>
            </div>
          `
        )}
      </div>

      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Portfolio Projects",
          "description": "Showcase of innovative software solutions and business transformations",
          "numberOfItems": ${projects.length},
          "itemListElement": [
            ${projects
          .map(
            (p, index) => `
          {
            "@type": "CreativeWork",
            "position": ${index + 1},
            "name": "${p.title}",
            "description": "${p.description}",
            "image": "${p.image}",
            "url": "/projects/${p.id}"
          }`
          )
          .join(",")}
          ]
        }
      </script>
    </div>
  </section>
`;

export default Portfolio;
