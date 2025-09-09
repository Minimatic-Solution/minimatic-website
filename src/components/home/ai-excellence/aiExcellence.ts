import { html } from "hono/html";
import AiExcellenceHeader from "./aiExcellenceHeader";
import AiExcellenceImpact from "./aiExcellenceImpact";
import AiExcellenceMetrics from "./aiExcellenceMetrics";

const AiExcellence = () => html`
  <section id="ai-excellence" class="py-20 lg:py-32 section-bg min-h-screen">
    <div class="container mx-auto px-6">
      ${AiExcellenceHeader()} ${AiExcellenceMetrics()} ${AiExcellenceImpact()}
    </div>
  </section>
`;

export default AiExcellence;
