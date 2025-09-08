import { html } from "hono/html";

const stats = [
  { value: "5+", label: "Years of Innovation", color: "text-blue-600" },
  { value: "150+", label: "Projects Delivered", color: "text-purple-600" },
  { value: "98%", label: "Client Satisfaction", color: "text-green-600" },
  { value: "24/7", label: "Global Support", color: "text-orange-600" },
];

const AboutStats = () => html`
  <aside class="grid grid-cols-2 gap-4">
    ${stats.map(
      (s) => html`
        <div
          class="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-gray-200 text-center"
        >
          <div class="text-2xl font-bold ${s.color} mb-1">${s.value}</div>
          <div class="text-sm text-gray-600">${s.label}</div>
        </div>
      `
    )}
  </aside>
`;

export default AboutStats;
