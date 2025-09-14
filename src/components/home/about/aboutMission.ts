import { html } from "hono/html";

const AboutMission = () => html`
  <section
    class="text-center mb-20 fade-in stagger-3"
    aria-labelledby="our-mission-heading"
  >
    <div
      class="scroll-reveal max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 lg:p-12 rounded-3xl border border-gray-200 shadow-lg"
    >
      <div
        class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
        aria-hidden="true"
      >
        <svg
          class="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-4a1 1 0 011-1h4a1 1 0 011 1v4M7 7h.01M7 11h.01"
          ></path>
        </svg>
      </div>
      <h2 class="text-3xl lg:text-4xl font-bold font-serif mb-6 text-gray-800">
        Our Mission
      </h2>
      <blockquote
        class="text-xl lg:text-2xl text-gray-600 leading-relaxed italic font-light"
      >
        "To empower businesses with cutting-edge software solutions that
        simplify complexity, enhance productivity, and unlock new possibilities
        for exponential growth."
      </blockquote>
    </div>
  </section>
`;

export default AboutMission;
