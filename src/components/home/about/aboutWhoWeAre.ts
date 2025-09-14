import { html } from "hono/html";

const AboutWhoWeAre = () => html`
  <section
    class="scroll-reveal grid lg:grid-cols-2 gap-16 items-center mb-20"
    aria-labelledby="who-we-are-heading"
  >
    <!-- Left Content -->
    <article
      class="space-y-8 fade-in stagger-1"
      aria-labelledby="who-we-are-heading"
    >
      <div>
        <h2
          class="text-4xl lg:text-5xl font-bold font-serif mb-6 text-gray-800"
          id="who-we-are-heading"
        >
          Who We Are
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed mb-6">
          At
          <span class="font-semibold text-blue-600">Minimatic Solutions</span>,
          we're more than just developers – we're digital architects who build
          the future. Our passionate team combines cutting-edge technology with
          creative problem-solving to deliver solutions that don't just meet
          expectations, they exceed them.
        </p>
        <p class="text-lg text-gray-600 leading-relaxed">
          Every project is an opportunity to push boundaries, challenge
          conventions, and create something extraordinary that propels
          businesses forward.
        </p>
      </div>

      <!-- Key Statistics -->
      <div class="grid grid-cols-2 gap-4" aria-label="Company statistics">
        >
        <div
          class="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-gray-200"
        >
          <div class="text-2xl font-bold text-blue-600 mb-1">5+</div>
          <div class="text-sm text-gray-600">Years of Innovation</div>
        </div>
        <div
          class="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-gray-200"
        >
          <div class="text-2xl font-bold text-purple-600 mb-1">150+</div>
          <div class="text-sm text-gray-600">Projects Delivered</div>
        </div>
        <div
          class="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-gray-200"
        >
          <div class="text-2xl font-bold text-green-600 mb-1">98%</div>
          <div class="text-sm text-gray-600">Client Satisfaction</div>
        </div>
        <div
          class="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-gray-200"
        >
          <div class="text-2xl font-bold text-orange-600 mb-1">24/7</div>
          <div class="text-sm text-gray-600">Global Support</div>
        </div>
      </div>
    </article>

    <!-- Right Visual -->
    <aside class="relative fade-in stagger-2">
      <figure class="relative overflow-hidden rounded-3xl">
        <img
          src="/images/about.jpeg"
          alt="Team collaboration at Minimatic Solutions"
          class="w-full h-96 object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30"
        ></div>

        <!-- Floating Achievement Cards -->
        <div
          class="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg"
        >
          <div class="flex items-center space-x-3">
            <div
              class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div>
              <div class="text-sm font-semibold">Quality Assured</div>
              <div class="text-xs text-gray-500">Every line of code</div>
            </div>
          </div>
        </div>

        <div class="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
          <div class="flex items-center space-x-3">
            <div
              class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div>
              <div class="text-sm font-semibold">Fast Delivery</div>
              <div class="text-xs text-gray-500">Lightning speed</div>
            </div>
          </div>
        </div>
      </figure>
    </aside>
  </section>
`;

export default AboutWhoWeAre;
