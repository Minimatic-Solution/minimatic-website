import { html } from "hono/html";

const PortfolioHeader = () => html`
  <header class="text-center max-w-4xl mx-auto mb-16 scroll-reveal">
    <h1
      id="portfolio-title"
      class="text-4xl lg:text-6xl font-bold text-foreground mb-6"
    >
      Our Projects
    </h1>
    <p
      class="text-lg lg:text-xl text-muted-foreground leading-relaxed"
      role="doc-subtitle"
      aria-describedby="portfolio-title"
    >
      Discover how we've transformed businesses through innovative software
      solutions. Each project represents our commitment to excellence, technical
      expertise, and client success.
    </p>
  </header>
`;

export default PortfolioHeader;
