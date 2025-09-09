import { html } from "hono/html";
import servicesData from "../../../data/services.json" assert { type: "json" };
import ServiceCard from "./serviceCard";

export const ServiceCardsGrid = () => html`
  <div class="scroll-reveal grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
    ${servicesData.map((service) =>
      ServiceCard({
        title: service.title,
        description: service.description,
        iconColor: service.iconColor,
        iconSvg: service.iconSvg,
      })
    )}
  </div>
`;
