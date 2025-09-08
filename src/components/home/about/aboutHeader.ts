import { html } from "hono/html";

const AboutHeader = () => html`
  <header class="text-center mb-20 fade-in">
    <div
      class="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-600 mb-6"
    >
      <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
      About Minimatic Solutions
    </div>
    <h1
      class="text-5xl lg:text-7xl font-bold font-serif mb-6 text-gradient leading-tight"
    >
      Crafting Digital
      <br />
      <span class="text-gray-800">Excellence</span>
    </h1>
    <p
      class="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
    >
      We transform ambitious ideas into powerful digital solutions that drive
      growth and innovation
    </p>
  </header>
`;

export default AboutHeader;
