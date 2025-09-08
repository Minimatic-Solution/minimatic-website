import { html } from "hono/html";
import AboutCTA from "./aboutCTA";
import AboutHeader from "./aboutHeader";
import AboutMission from "./aboutMission";
import AboutValues from "./aboutValues";
import AboutWhoWeAre from "./aboutWhoWeAre";

const About = () => html`
  <section id="about" class="relative py-20 lg:py-32 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-mesh"></div>
    <div
      class="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl floating-element"
    ></div>
    <div
      class="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl floating-element"
      style="animation-delay: -3s;"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
      ${AboutHeader()} ${AboutWhoWeAre()} ${AboutMission()} ${AboutValues()}
      ${AboutCTA()}
    </div>
  </section>
`;

export default About;
