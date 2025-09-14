import { html } from "hono/html";

const DevelopmentProcess = () => html`
  <section
    class="scroll-reveal bg-background rounded-2xl p-8 lg:p-12 border border-border"
    aria-labelledby="process-heading"
  >
    <div class="text-center mb-12">
      <h3
        id="process-heading"
        class="text-2xl lg:text-3xl font-bold text-foreground mb-4"
      >
        Our Development Process
      </h3>
      <p class="text-muted-foreground max-w-2xl mx-auto">
        We follow a proven methodology that ensures quality, transparency, and
        timely delivery of your project.
      </p>
    </div>

    <ol class="grid md:grid-cols-4 gap-8" role="list">
      <li class="text-center" role="listitem">
        <div
          class="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
          aria-hidden="true"
        >
          <span class="text-primary font-bold text-lg">1</span>
        </div>
        <h4 class="font-semibold text-foreground mb-2">Discovery</h4>
        <p class="text-sm text-muted-foreground">
          Understanding your requirements and business goals
        </p>
      </li>

      <li class="text-center" role="listitem">
        <div
          class="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
          aria-hidden="true"
        >
          <span class="text-accent font-bold text-lg">2</span>
        </div>
        <h4 class="font-semibold text-foreground mb-2">Planning</h4>
        <p class="text-sm text-muted-foreground">
          Creating detailed project roadmap and architecture
        </p>
      </li>

      <li class="text-center" role="listitem">
        <div
          class="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
          aria-hidden="true"
        >
          <span class="text-primary font-bold text-lg">3</span>
        </div>
        <h4 class="font-semibold text-foreground mb-2">Development</h4>
        <p class="text-sm text-muted-foreground">
          Agile development with regular updates and feedback
        </p>
      </li>

      <li class="text-center" role="listitem">
        <div
          class="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
          aria-hidden="true"
        >
          <span class="text-accent font-bold text-lg">4</span>
        </div>
        <h4 class="font-semibold text-foreground mb-2">Deployment</h4>
        <p class="text-sm text-muted-foreground">
          Launch and ongoing support with monitoring
        </p>
      </li>
    </ol>
  </section>
`;

export default DevelopmentProcess;
