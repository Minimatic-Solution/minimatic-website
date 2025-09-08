import { html } from "hono/html";
import DevelopmentProcess from "./developmentProcess";
import { ServiceCardsGrid } from "./serviceCardsGrid";
import ServiceCTA from "./serviceCTA";
import ServiceHeader from "./serviceHeader";

const Service = () => html` <section
  id="services"
  class="py-16 lg:py-24 bg-muted"
>
  <div class="container mx-auto px-4">
    ${ServiceHeader()} ${ServiceCardsGrid()} ${DevelopmentProcess()}
    ${ServiceCTA()}
  </div>
</section>`;

export default Service;
