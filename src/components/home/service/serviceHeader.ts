import { html } from "hono/html";

const ServiceHeader = () => html`
  <header
    class="scroll-reveal text-center max-w-3xl mx-auto mb-16"
    role="banner"
  >
    <h2
      id="services-heading"
      class="text-3xl lg:text-5xl font-bold text-foreground mb-6"
    >
      Our Professional Services
    </h2>
    <p class="text-lg text-muted-foreground leading-relaxed">
      We deliver cutting-edge software solutions that transform businesses and
      drive innovation. Our expert team combines technical excellence with
      strategic thinking to create impactful digital experiences.
    </p>
  </header>
`;

export default ServiceHeader;
