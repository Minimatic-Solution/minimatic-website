import { html } from "hono/html";

const ServiceCTA = () => html`
  <aside
    class="scroll-reveal text-center mt-16"
    aria-labelledby="cta-heading"
    role="complementary"
  >
    <h3 id="cta-heading" class="text-2xl font-bold text-foreground mb-4">
      Ready to Start Your Project?
    </h3>
    <p class="text-muted-foreground mb-8 max-w-2xl mx-auto">
      Let's discuss how we can help transform your ideas into powerful software
      solutions that drive your business forward.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        class="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors schedule-call-btn"
        aria-label="Schedule a consultation call"
      >
        Schedule Consultation
      </button>
      <a
        class="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-lg border border-border hover:bg-muted bg-transparent transition-colors"
        href="#portfolio"
        aria-label="View our portfolio work"
      >
        View Our Work
      </a>
    </div>
  </aside>
`;

export default ServiceCTA;
