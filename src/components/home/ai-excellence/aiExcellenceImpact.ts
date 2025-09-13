import { html } from "hono/html";

const AiExcellenceImpact = () => html`
  <div class="relative overflow-hidden scroll-reveal">
    <div
      class="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl"
    ></div>
    <div class="absolute inset-0 bg-black/20 rounded-3xl"></div>

    <div
      class="relative z-10 px-8 lg:px-16 py-12 lg:py-20 rounded-3xl text-white"
    >
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
      >
        <!-- Main Message -->
        <div class="lg:col-span-7">
          <div
            class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur text-white/90 text-sm font-medium mb-6"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            Proven Results
          </div>

          <h2 class="text-3xl lg:text-5xl font-black mb-6 leading-tight">
            Deliver
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300"
              >10X Faster</span
            ><br />
            Without Compromise
          </h2>

          <p class="text-xl text-white/90 mb-8 leading-relaxed font-light">
            Our world-class engineering team leverages cutting-edge AI to
            accelerate every phase of development while maintaining the highest
            quality standards.
          </p>

          <button
            class="group px-8 py-4 bg-white text-gray-900 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg schedule-call-btn"
          >
            <span class="flex items-center">
              Schedule a Call
              <svg
                class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div>

        <!-- Stats Grid -->
        <div class="lg:col-span-5">
          <div class="grid grid-cols-2 gap-6">
            <div
              class="glass-card rounded-2xl p-6 text-center floating-animation"
            >
              <div
                class="stats-counter text-4xl lg:text-5xl font-black text-white mb-2"
              >
                500+
              </div>
              <div class="text-white/80 font-medium">Projects Delivered</div>
            </div>

            <div
              class="glass-card rounded-2xl p-6 text-center floating-animation"
              style="animation-delay: 0.5s;"
            >
              <div
                class="stats-counter text-4xl lg:text-5xl font-black text-white mb-2"
              >
                100%
              </div>
              <div class="text-white/80 font-medium">IP Protection</div>
            </div>

            <div
              class="glass-card rounded-2xl p-6 text-center floating-animation"
              style="animation-delay: 1s;"
            >
              <div class="text-4xl lg:text-5xl font-black text-white mb-2">
                Top 1%
              </div>
              <div class="text-white/80 font-medium">Global Talent</div>
            </div>

            <div
              class="glass-card rounded-2xl p-6 text-center floating-animation"
              style="animation-delay: 1.5s;"
            >
              <div
                class="stats-counter text-4xl lg:text-5xl font-black text-white mb-2"
              >
                24/7
              </div>
              <div class="text-white/80 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export default AiExcellenceImpact;
