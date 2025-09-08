import { html } from "hono/html";

const About = () => html`
  <section id="about" class="py-20 lg:py-28 bg-background">
    <div class="container mx-auto px-4 space-y-20">
      <!-- Who We Are -->
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1
            class="text-4xl lg:text-6xl font-bold font-serif mb-6 text-foreground"
          >
            Who We Are
          </h1>
          <p class="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            At
            <span class="font-semibold text-primary">Minimatic Solutions</span>,
            we’re a team of passionate innovators dedicated to transforming
            businesses with powerful, scalable, and user-friendly software. Our
            focus is delivering measurable results that help clients grow and
            thrive in the digital era.
          </p>
        </div>
        <div class="relative">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200"
            alt="About Minimatic"
            class="rounded-2xl shadow-lg object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl"
          ></div>
        </div>
      </div>

      <!-- Mission Statement -->
      <div class="text-center max-w-3xl mx-auto">
        <h2 class="text-3xl lg:text-4xl font-bold font-serif mb-6">
          Our Mission
        </h2>
        <p class="text-xl text-muted-foreground leading-relaxed italic">
          “To empower businesses with cutting-edge software solutions that
          simplify complexity, enhance productivity, and unlock new
          possibilities for growth.”
        </p>
      </div>

      <!-- Core Values -->
      <div>
        <h2 class="text-3xl lg:text-4xl font-bold font-serif text-center mb-12">
          Our Core Values
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Innovation -->
          <div
            class="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary/10"
            >
              <svg
                class="h-8 w-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m2.636-6.364l.707.707M9.663 17h4.673M12 3v1m0 0a9 9 0 110 18 9 9 0 010-18z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Innovation</h3>
            <p class="text-muted-foreground">
              We embrace new technologies and bold ideas to deliver
              transformative solutions.
            </p>
          </div>

          <!-- Integrity -->
          <div
            class="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-secondary/10"
            >
              <svg
                class="h-8 w-8 text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6l4 2"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Integrity</h3>
            <p class="text-muted-foreground">
              Transparency and ethical practices guide every project and
              partnership.
            </p>
          </div>

          <!-- Customer-Centric -->
          <div
            class="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-lg transition"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary/10"
            >
              <svg
                class="h-8 w-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Customer First</h3>
            <p class="text-muted-foreground">
              We succeed only when our clients succeed. Your goals are our
              goals.
            </p>
          </div>
        </div>
      </div>

      <!-- Stats + CTA -->
      <div class="bg-accent rounded-2xl p-10 lg:p-16 text-center space-y-10">
        <h2
          class="text-3xl lg:text-4xl font-bold font-serif text-accent-foreground"
        >
          Why Choose Minimatic Solutions?
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div class="text-4xl font-bold text-accent-foreground">5+</div>
            <p class="text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <div class="text-4xl font-bold text-accent-foreground">150+</div>
            <p class="text-muted-foreground">Projects Delivered</p>
          </div>
          <div>
            <div class="text-4xl font-bold text-accent-foreground">98%</div>
            <p class="text-muted-foreground">Client Satisfaction</p>
          </div>
          <div>
            <div class="text-4xl font-bold text-accent-foreground">24/7</div>
            <p class="text-muted-foreground">Global Support</p>
          </div>
        </div>
        <p
          class="text-lg text-accent-foreground max-w-2xl mx-auto leading-relaxed"
        >
          We craft software that makes businesses stronger, faster, and more
          competitive. With our agile approach and focus on quality, your
          success is guaranteed.
        </p>
        <a
          href="#services"
          class="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition"
        >
          Learn More About Our Services
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
        </a>
      </div>
    </div>
  </section>
`;

export default About;
