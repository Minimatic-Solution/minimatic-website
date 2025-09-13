import { html } from "hono/html";
import ContactForm from "./contactForm";
import ContactHeader from "./contactHeader";
import ContactInfo from "./contactInfo";

const Contact = () => html`
  <section id="contact" class="relative py-20 lg:py-32 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-mesh" aria-hidden="true"></div>
    <div
      class="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl floating-element"
      aria-hidden="true"
    ></div>
    <div
      class="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl floating-element"
      style="animation-delay: -3s;"
      aria-hidden="true"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
      ${ContactHeader()}

      <div class="grid lg:grid-cols-2 gap-16 mb-20">
        ${ContactForm()} ${ContactInfo()}
      </div>
    </div>
  </section>
`;
export default Contact;
