import { html } from "hono/html";
import projects from "../../../data/projects.json" assert { type: "json" };
import PortfolioHeader from "./portfolioHeader";
import ProjectCard from "./projectCard";

const Portfolio = () => html`
  <section id="portfolio" class="py-16 lg:py-24 bg-gray-100">
    <div class="container mx-auto px-4">
      ${PortfolioHeader()}

      <!-- Project Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${projects.map(
          (p) => html`
            <a
              href="/projects/${p.id}"
              class="block hover:no-underline focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
              aria-label="View details for ${p.title}"
            >
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

  <!-- SEO: Structured Data -->
  <script type="application/ld+json">
    ${JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Portfolio Projects",
        description:
          "Showcase of innovative software solutions and business transformations",
        numberOfItems: projects.length,
        itemListElement: projects.map((p, index) => ({
          "@type": "CreativeWork",
          position: index + 1,
          name: p.title,
          description: p.description,
          image: p.image,
          url: `/projects/${p.id}`,
        })),
      },
      null,
      2
    )}
  </script>
`;

export default Portfolio;
