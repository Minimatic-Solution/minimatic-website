import { html } from "hono/html";

const ContactInfo = () => html`
  <aside class="space-y-8 fade-in stagger-2">
    <!-- Quick Contact Info -->
    <section
      class="contact-card p-8 rounded-3xl border border-gray-200 shadow-xl"
    >
      <h2 class="text-3xl font-bold font-serif mb-6 text-gray-800">
        Get in Touch
      </h2>

      <!-- Contact Items -->
      <address class="space-y-6 not-italic">
        <!-- Email -->
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-800 mb-1">Email Us</h3>
            <p class="text-gray-600">
              <a
                href="mailto:hello@minimaticsolutions.com"
                class="hover:text-blue-600 transition-colors"
                >hello@minimaticsolutions.com</a
              >
            </p>
            <p class="text-gray-600">
              <a
                href="mailto:support@minimaticsolutions.com"
                class="hover:text-blue-600 transition-colors"
                >support@minimaticsolutions.com</a
              >
            </p>
          </div>
        </div>

        <!-- Phone -->
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-800 mb-1">Call Us</h3>
            <p class="text-gray-600">
              <a
                href="tel:+8801723100925"
                class="hover:text-green-600 transition-colors"
                >+880 1723-100925</a
              >
            </p>
          </div>
        </div>

        <!-- Location -->
        <div class="flex items-start space-x-4">
          <div
            class="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 class="font-semibold text-gray-800 mb-1">Visit Us</h3>
            <p class="text-gray-600">
              Padma Garden<br />
              Road No 3<br />
              Padma Abasahik, Rajshahi
            </p>
          </div>
        </div>
      </address>
    </section>

    <!-- Response Time -->
    <section
      class="contact-card p-6 rounded-2xl border border-gray-200 shadow-xl"
    >
      <div class="flex items-center space-x-4">
        <div
          class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center"
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
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div>
          <h3 class="text-xl font-bold text-gray-800">Quick Response</h3>
          <p class="text-gray-600">
            We typically respond within 2-4 hours during business days
          </p>
        </div>
      </div>
    </section>

    <!-- Social Links -->
    <section
      class="contact-card p-6 rounded-2xl border border-gray-200 shadow-xl"
    >
      <h3 class="text-xl font-bold text-gray-800 mb-4">Connect With Us</h3>
      <nav class="flex space-x-4">
        <!-- Twitter -->
        <a
          href="https://x.com/shahinali_dev"
          class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Follow us on Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            class="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
            />
          </svg>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/takiuddin-ahmed-871607b5/"
          class="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Connect with us on LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            class="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </a>

        <!-- GitHub -->
        <a
          href="https://github.com/Minimatic-Solution"
          class="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Check out our GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            class="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
      </nav>
    </section>
  </aside>
`;

export default ContactInfo;
