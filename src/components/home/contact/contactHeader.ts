import { html } from "hono/html";

const ContactHeader = () => html`
  <div class="text-center mb-16 fade-in scroll-reveal">
    <div
      class="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-600 mb-6 scroll-reveal"
    >
      <span class="w-2 h-2 bg-green-500 rounded-full mr-2 pulse-dot"></span>
      Available for New Projects
    </div>
    <h1
      class="text-5xl lg:text-7xl font-bold font-serif mb-6 text-gradient leading-tight scroll-reveal"
    >
      Let's Build
      <br />
      <span class="text-gray-800">Something Amazing</span>
    </h1>
    <p
      class="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed scroll-reveal"
    >
      Ready to transform your ideas into powerful digital solutions? We're here
      to help you succeed.
    </p>
  </div>
`;

export default ContactHeader;
