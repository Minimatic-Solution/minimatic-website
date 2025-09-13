import { html } from "hono/html";

const AboutValues = () => html`
  <section class="mb-20 fade-in stagger-4 ">
    <h2
      class="text-4xl lg:text-5xl font-bold font-serif text-center mb-16 text-gray-800"
    >
      Our Core Values
    </h2>

    <div class="grid md:grid-cols-3 gap-8 scroll-reveal">
      <!-- Innovation Value -->
      <article
        class="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 card-hover group"
      >
        <div
          class="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
          aria-hidden="true"
        >
          <svg
            class="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            ></path>
          </svg>
        </div>
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Innovation</h3>
        <p class="text-gray-600 leading-relaxed">
          We embrace cutting-edge technologies and bold ideas to deliver
          transformative solutions that push the boundaries of what's possible.
        </p>
      </article>

      <!-- Integrity Value -->
      <article
        class="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 card-hover group"
      >
        <div
          class="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
          aria-hidden="true"
        >
          <svg
            class="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            ></path>
          </svg>
        </div>
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Integrity</h3>
        <p class="text-gray-600 leading-relaxed">
          Transparency, honesty, and ethical practices guide every project and
          partnership, building trust that lasts a lifetime.
        </p>
      </article>

      <!-- Customer First Value -->
      <article
        class="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 card-hover group"
      >
        <div
          class="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
          aria-hidden="true"
        >
          <svg
            class="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <h3 class="text-2xl font-bold mb-4 text-gray-800">Customer First</h3>
        <p class="text-gray-600 leading-relaxed">
          Your success is our success. We're not just service providers – we're
          your dedicated partners in achieving extraordinary results.
        </p>
      </article>
    </div>
  </section>
`;

export default AboutValues;
