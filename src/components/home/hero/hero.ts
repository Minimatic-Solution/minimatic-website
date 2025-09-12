import { html } from "hono/html";
import ChatSidebar from "./chatSidebar";

const Hero = () => html`
  <!-- Hero Section -->
  <section class="relative overflow-hidden">
    <div class="container mx-auto px-4 py-16 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <div class="space-y-4">
            <h1
              class="text-4xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              Innovative Software Solutions for a
              <span class="text-accent">Digital Future</span>
            </h1>
            <p class="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Transforming ideas into impactful software with cutting-edge
              technology. We build scalable, secure, and user-centric
              applications that drive business growth.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button
              class="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground transition transform active:scale-95 schedule-call-btn"
            >
              Schedule a Call
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <a
              class="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg border border-border hover:bg-muted bg-transparent transition transform active:scale-95"
              href="#contact"
            >
              Get in Touch
            </a>
          </div>

          <!-- Trust Indicators -->
          <div class="space-y-4">
            <p class="text-sm text-muted-foreground font-medium">
              Trusted by innovative companies worldwide
            </p>
            <div class="flex items-center gap-6 opacity-60">
              <div
                class="text-xs font-semibold text-muted-foreground tracking-wider"
              >
                MICROSOFT
              </div>
              <div
                class="text-xs font-semibold text-muted-foreground tracking-wider"
              >
                GOOGLE
              </div>
              <div
                class="text-xs font-semibold text-muted-foreground tracking-wider"
              >
                AMAZON
              </div>
              <div
                class="text-xs font-semibold text-muted-foreground tracking-wider"
              >
                STRIPE
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content - Feature Cards -->
        <div class="relative">
          <div class="grid grid-cols-1 gap-6">
            <!-- Main Feature Card -->
            <div class="bg-card border border-border rounded-lg p-6 shadow-sm">
              <div class="flex items-start gap-4">
                <div class="bg-accent/10 p-3 rounded-lg">
                  <svg
                    class="h-6 w-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div class="space-y-2">
                  <h3 class="font-semibold text-card-foreground">
                    Custom Development
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    Tailored solutions built with modern frameworks and best
                    practices
                  </p>
                </div>
              </div>
            </div>

            <!-- Secondary Feature Cards -->
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-card border border-border rounded-lg p-4">
                <div class="space-y-3">
                  <div class="bg-accent/10 p-2 rounded-lg w-fit">
                    <svg
                      class="h-5 w-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-medium text-card-foreground text-sm">
                      Fast Delivery
                    </h4>
                    <p class="text-xs text-muted-foreground">
                      Rapid development cycles
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-card border border-border rounded-lg p-4">
                <div class="space-y-3">
                  <div class="bg-accent/10 p-2 rounded-lg w-fit">
                    <svg
                      class="h-5 w-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-medium text-card-foreground text-sm">
                      Secure & Scalable
                    </h4>
                    <p class="text-xs text-muted-foreground">
                      Enterprise-grade security
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stats Card -->
            <div class="bg-accent/5 border border-accent/20 rounded-lg p-6">
              <div class="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div class="text-2xl font-bold text-accent">500+</div>
                  <div class="text-xs text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-accent">98%</div>
                  <div class="text-xs text-muted-foreground">Success Rate</div>
                </div>
                <div>
                  <div class="text-2xl font-bold text-accent">24/7</div>
                  <div class="text-xs text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Background Decoration -->
          <div
            class="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl"
          ></div>
          <div
            class="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/5 rounded-full blur-2xl"
          ></div>
        </div>
      </div>
    </div>

    <!-- Background Pattern -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"
      ></div>
    </div>
  </section>

  <!-- Chat Button (Fixed Position) -->
  <div id="chat-button" class="fixed bottom-6 right-6 z-50">
    <button
      class="bg-accent hover:bg-accent/90 text-accent-foreground p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
    >
      <svg
        class="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </button>
  </div>

  <!-- Chat Sidebar -->
   ${ChatSidebar()}
  
  </div>
`;

export default Hero;
