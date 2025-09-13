import { html } from "hono/html";

export const ServiceCard = ({ title, description, iconColor, iconSvg }) => html`
  <div
    class=" bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 group"
  >
    <div
      class="bg-${iconColor}/10 p-4 rounded-lg w-fit mb-6 group-hover:bg-${iconColor}/20 transition-colors"
    >
      ${html([iconSvg])}
    </div>
    <h3 class="text-xl font-bold text-card-foreground mb-4">${title}</h3>
    <p class="text-muted-foreground mb-6 leading-relaxed">${description}</p>
  </div>
`;

export default ServiceCard;
