import { html } from "hono/html";

const AboutCTA = () => html`
  <section class="text-center fade-in" aria-labelledby="cta-heading">
    <div
      class="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-3xl max-w-4xl mx-auto scroll-reveal"
    >
      <div class="bg-white rounded-3xl p-8 lg:p-12">
        <h2
          class="text-3xl lg:text-4xl font-bold font-serif mb-6 text-gray-800"
        >
          Ready to Transform Your Business?
        </h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Let's turn your vision into reality with software solutions that drive
          growth, efficiency, and competitive advantage.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/takiuddinahmed-ciyp"
            target="_blank"
            class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            aria-label="Schedule a consultation with us"
          >
            Schedule a Consultation
            <svg
              class="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
          <a
            href="#contact"
            class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-800 transition-all duration-300 transform hover:scale-105"
            aria-label="Get in touch with us to discuss your project"
          >
            Get in Touch
            <svg
              class="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
`;

export default AboutCTA;
