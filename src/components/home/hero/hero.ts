import { html } from "hono/html";
import ChatSidebar from "./chatSidebar";

const Hero = () => html`
  <!-- Hero Section -->
  <section
    id="hero"
    class="relative overflow-hidden"
    aria-labelledby="hero-heading"
  >
    <div class="container mx-auto px-4 py-16 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <header class="space-y-4">
            <h1
              id="hero-heading"
              class="text-4xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              Innovative Software Solutions for a
              <span class="text-accent">Digital Future</span>
            </h1>
            <p
              class="text-lg lg:text-xl text-muted-foreground leading-relaxed"
              aria-label="Company mission statement"
            >
              Transforming ideas into impactful software with cutting-edge
              technology. We build scalable, secure, and user-centric
              applications that drive business growth.
            </p>
          </header>

          <!-- CTA Buttons -->
          <nav
            aria-label="Primary actions"
            class="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              role="button"
              class="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground transition transform active:scale-95 schedule-call-btn"
            >
              Schedule a Call
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <a
              href="#contact"
              class="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg border border-border hover:bg-muted bg-transparent transition transform active:scale-95"
            >
              Get in Touch
            </a>
          </nav>

          <!-- Connect with us -->
          <aside class="space-y-4" aria-label="Social media links">
            <p class="text-sm text-muted-foreground font-medium">
              Connect with us
            </p>
            <div class="flex items-center gap-6 opacity-80">
              <!-- Email -->
              <a
                href="mailto:hello@example.com"
                class="hover:text-accent"
                aria-label="Email Minimatic Solutions"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>

              <!-- LinkedIn -->
              <a
                href="https://www.linkedin.com/company/minimatic-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-accent"
                aria-label="Visit Minimatic Solutions on LinkedIn"
              >
                <svg
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M19 0h-14c-2.77 0-5 2.23-5 
                    5v14c0 2.77 2.23 5 5 5h14c2.77 0 
                    5-2.23 5-5v-14c0-2.77-2.23-5-5-5zM8.34 
                    19h-3v-10h3v10zM6.84 7.47c-.96 
                    0-1.74-.78-1.74-1.74s.78-1.74 
                    1.74-1.74 1.74.78 
                    1.74 1.74-.78 1.74-1.74 
                    1.74zM20 19h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
                    0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 
                    1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6v5.6z"
                  />
                </svg>
              </a>

              <!-- GitHub -->
              <a
                href="https://github.com/Minimatic-Solution"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-accent"
                aria-label="Visit Minimatic Solutions on GitHub"
              >
                <svg
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 
                    5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 
                    0-.29-.01-1.05-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 
                    1.21.09 1.85 1.24 1.85 1.24 
                    1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 
                    0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.18 
                    0 0 1.01-.32 3.3 1.23.96-.27 
                    1.98-.4 3-.41 1.02.01 2.04.14 
                    3 .41 2.29-1.55 3.3-1.23 
                    3.3-1.23.66 1.66.24 2.88.12 
                    3.18.77.85 1.24 1.93 1.24 
                    3.25 0 4.63-2.81 5.66-5.49 
                    5.96.43.37.81 1.1.81 2.22 
                    0 1.6-.01 2.89-.01 3.29 
                    0 .32.22.7.82.58C20.56 21.8 
                    24 17.3 24 12c0-6.63-5.37-12-12-12z"
                  />
                </svg>
              </a>
            </div>
          </aside>
        </div>

        <!-- Right Content - Feature Cards -->
        <div class="relative">
          <section aria-label="Key features" class="grid grid-cols-1 gap-6">
            <!-- Main Feature Card -->
            <article
              class="bg-card border border-border rounded-lg p-6 shadow-sm"
            >
              <div class="flex items-start gap-4">
                <div class="bg-accent/10 p-3 rounded-lg" aria-hidden="true">
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
            </article>

            <!-- Secondary Feature Cards -->
            <div class="grid grid-cols-2 gap-4">
              <article class="bg-card border border-border rounded-lg p-4">
                <div class="space-y-3">
                  <div
                    class="bg-accent/10 p-2 rounded-lg w-fit"
                    aria-hidden="true"
                  >
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
              </article>

              <article class="bg-card border border-border rounded-lg p-4">
                <div class="space-y-3">
                  <div
                    class="bg-accent/10 p-2 rounded-lg w-fit"
                    aria-hidden="true"
                  >
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
              </article>
            </div>

            <!-- Stats Card -->
            <aside
              class="bg-accent/5 border border-accent/20 rounded-lg p-6"
              aria-label="Company statistics"
            >
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
            </aside>
          </section>

          <!-- Background Decoration -->
          <div
            class="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl"
            aria-hidden="true"
          ></div>
          <div
            class="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/5 rounded-full blur-2xl"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </div>

    <!-- Background Pattern -->
    <div class="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"
      ></div>
    </div>
  </section>

  <!-- Chat Button -->
  <div id="chat-button" class="fixed bottom-6 right-6 z-50">
    <button
      class="bg-accent hover:bg-accent/90 text-accent-foreground p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Open chat support"
    >
      <svg
        class="h-6 w-6"
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
        />
      </svg>
    </button>
  </div>

  <!-- Chat Sidebar -->
  ${ChatSidebar()}
`;

export default Hero;
