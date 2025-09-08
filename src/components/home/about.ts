import { html } from "hono/html";

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
      <!-- Hero Section -->
      <div class="text-center mb-20 fade-in">
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
          We transform ambitious ideas into powerful digital solutions that
          drive growth and innovation
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <!-- Left Content -->
        <div class="space-y-8 fade-in stagger-1">
          <div>
            <h2
              class="text-4xl lg:text-5xl font-bold font-serif mb-6 text-gray-800"
            >
              Who We Are
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              At
              <span class="font-semibold text-blue-600"
                >Minimatic Solutions</span
              >, we're more than just developers – we're digital architects who
              build the future. Our passionate team combines cutting-edge
              technology with creative problem-solving to deliver solutions that
              don't just meet expectations, they exceed them.
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              Every project is an opportunity to push boundaries, challenge
              conventions, and create something extraordinary that propels
              businesses forward.
            </p>
          </div>

          <!-- Key Features -->
          <div class="grid grid-cols-2 gap-4">
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
        </div>

        <!-- Right Visual -->
        <div class="relative fade-in stagger-2">
          <div class="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Team collaboration at Minimatic Solutions"
              class="w-full h-96 object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30"
            ></div>

            <!-- Floating Cards -->
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

            <div
              class="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
            >
              <div class="flex items-center space-x-3">
                <div
                  class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center"
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
          </div>
        </div>
      </div>

      <!-- Mission Statement -->
      <div class="text-center mb-20 fade-in stagger-3">
        <div
          class="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 lg:p-12 rounded-3xl border border-gray-200 shadow-lg"
        >
          <div
            class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
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
          <h2
            class="text-3xl lg:text-4xl font-bold font-serif mb-6 text-gray-800"
          >
            Our Mission
          </h2>
          <p
            class="text-xl lg:text-2xl text-gray-600 leading-relaxed italic font-light"
          >
            "To empower businesses with cutting-edge software solutions that
            simplify complexity, enhance productivity, and unlock new
            possibilities for exponential growth."
          </p>
        </div>
      </div>

      <!-- Core Values -->
      <div class="mb-20 fade-in stagger-4">
        <h2
          class="text-4xl lg:text-5xl font-bold font-serif text-center mb-16 text-gray-800"
        >
          Our Core Values
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Innovation -->
          <div
            class="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 card-hover group"
          >
            <div
              class="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
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
              transformative solutions that push the boundaries of what's
              possible.
            </p>
          </div>

          <!-- Integrity -->
          <div
            class="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 card-hover group"
          >
            <div
              class="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
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
              Transparency, honesty, and ethical practices guide every project
              and partnership, building trust that lasts a lifetime.
            </p>
          </div>

          <!-- Customer First -->
          <div
            class="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 card-hover group"
          >
            <div
              class="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
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
            <h3 class="text-2xl font-bold mb-4 text-gray-800">
              Customer First
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Your success is our success. We're not just service providers –
              we're your dedicated partners in achieving extraordinary results.
            </p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center fade-in">
        <div
          class="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-3xl max-w-4xl mx-auto"
        >
          <div class="bg-white rounded-3xl p-8 lg:p-12">
            <h2
              class="text-3xl lg:text-4xl font-bold font-serif mb-6 text-gray-800"
            >
              Ready to Transform Your Business?
            </h2>
            <p
              class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Let's turn your vision into reality with software solutions that
              drive growth, efficiency, and competitive advantage.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Our Services
                <svg
                  class="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
              >
                Get in Touch
                <svg
                  class="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
      </div>
    </div>
  </section>
`;

export default About;
