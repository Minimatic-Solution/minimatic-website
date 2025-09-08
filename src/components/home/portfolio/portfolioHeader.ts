import { html } from "hono/html";

const PortfolioHeader = () => html` <div
  class="text-center max-w-4xl mx-auto mb-16"
>
  <h1 class="text-4xl lg:text-6xl font-bold text-foreground mb-6">
    Our Projects
  </h1>
  <p class="text-lg lg:text-xl text-muted-foreground leading-relaxed">
    Discover how we've transformed businesses through innovative software
    solutions. Each project represents our commitment to excellence, technical
    expertise, and client success.
  </p>
</div>`;

export default PortfolioHeader;
