import { html } from "hono/html";

const Service = () => html` <section
  id="services"
  class="py-16 lg:py-24 bg-muted"
>
  <div class="container mx-auto px-4">
    <!-- Header -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-3xl lg:text-5xl font-bold text-foreground mb-6">
        Our Professional Services
      </h2>
      <p class="text-lg text-muted-foreground leading-relaxed">
        We deliver cutting-edge software solutions that transform businesses and
        drive innovation. Our expert team combines technical excellence with
        strategic thinking to create impactful digital experiences.
      </p>
    </div>

    <!-- Service Cards Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <!-- Web Development -->
      <div
        class="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 group"
      >
        <div
          class="bg-primary/10 p-4 rounded-lg w-fit mb-6 group-hover:bg-primary/20 transition-colors"
        >
          <svg
            class="h-8 w-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-card-foreground mb-4">
          Web Development
        </h3>
        <p class="text-muted-foreground mb-6 leading-relaxed">
          Modern, responsive web applications built with React, Next.js, and
          cutting-edge technologies. Optimized for performance, SEO, and user
          experience.
        </p>
        <button
          onclick="handleServiceInquiry('web-development')"
          class="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Learn More
          <svg
            class="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Development -->
      <div
        class="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 group"
      >
        <div
          class="bg-accent/10 p-4 rounded-lg w-fit mb-6 group-hover:bg-accent/20 transition-colors"
        >
          <svg
            class="h-8 w-8 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-card-foreground mb-4">
          Mobile Development
        </h3>
        <p class="text-muted-foreground mb-6 leading-relaxed">
          Native and cross-platform mobile applications for iOS and Android.
          Built with React Native, Flutter, and native technologies for optimal
          performance.
        </p>
        <button
          onclick="handleServiceInquiry('mobile-development')"
          class="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Learn More
          <svg
            class="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <!-- Cloud Solutions -->
      <div
        class="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 group"
      >
        <div
          class="bg-primary/10 p-4 rounded-lg w-fit mb-6 group-hover:bg-primary/20 transition-colors"
        >
          <svg
            class="h-8 w-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-card-foreground mb-4">
          Cloud Solutions
        </h3>
        <p class="text-muted-foreground mb-6 leading-relaxed">
          Scalable cloud infrastructure and DevOps solutions on AWS, Azure, and
          Google Cloud. Automated deployment, monitoring, and maintenance for
          enterprise applications.
        </p>
        <button
          onclick="handleServiceInquiry('cloud-solutions')"
          class="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Learn More
          <svg
            class="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <!-- AI & Machine Learning -->
      <div
        class="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 group"
      >
        <div
          class="bg-accent/10 p-4 rounded-lg w-fit mb-6 group-hover:bg-accent/20 transition-colors"
        >
          <svg
            class="h-8 w-8 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-card-foreground mb-4">
          AI & Machine Learning
        </h3>
        <p class="text-muted-foreground mb-6 leading-relaxed">
          Intelligent solutions powered by artificial intelligence and machine
          learning. Custom AI models, data analytics, and automation to drive
          business insights.
        </p>
        <button
          onclick="handleServiceInquiry('ai-ml')"
          class="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Learn More
          <svg
            class="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <!-- E-commerce Solutions -->
      <div
        class="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 group"
      >
        <div
          class="bg-primary/10 p-4 rounded-lg w-fit mb-6 group-hover:bg-primary/20 transition-colors"
        >
          <svg
            class="h-8 w-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-card-foreground mb-4">
          E-commerce Solutions
        </h3>
        <p class="text-muted-foreground mb-6 leading-relaxed">
          Complete e-commerce platforms with payment integration, inventory
          management, and analytics. Built for scalability and optimized for
          conversions.
        </p>
        <button
          onclick="handleServiceInquiry('ecommerce')"
          class="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Learn More
          <svg
            class="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <!-- Consulting & Strategy -->
      <div
        class="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 group"
      >
        <div
          class="bg-accent/10 p-4 rounded-lg w-fit mb-6 group-hover:bg-accent/20 transition-colors"
        >
          <svg
            class="h-8 w-8 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-card-foreground mb-4">
          Consulting & Strategy
        </h3>
        <p class="text-muted-foreground mb-6 leading-relaxed">
          Strategic technology consulting to align your digital initiatives with
          business goals. Architecture planning, technology audits, and digital
          transformation roadmaps.
        </p>
        <button
          onclick="handleServiceInquiry('consulting')"
          class="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Learn More
          <svg
            class="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Process Section -->
    <div class="bg-background rounded-2xl p-8 lg:p-12 border border-border">
      <div class="text-center mb-12">
        <h3 class="text-2xl lg:text-3xl font-bold text-foreground mb-4">
          Our Development Process
        </h3>
        <p class="text-muted-foreground max-w-2xl mx-auto">
          We follow a proven methodology that ensures quality, transparency, and
          timely delivery of your project.
        </p>
      </div>

      <div class="grid md:grid-cols-4 gap-8">
        <!-- Discovery -->
        <div class="text-center">
          <div
            class="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
          >
            <span class="text-primary font-bold text-lg">1</span>
          </div>
          <h4 class="font-semibold text-foreground mb-2">Discovery</h4>
          <p class="text-sm text-muted-foreground">
            Understanding your requirements and business goals
          </p>
        </div>

        <!-- Planning -->
        <div class="text-center">
          <div
            class="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
          >
            <span class="text-accent font-bold text-lg">2</span>
          </div>
          <h4 class="font-semibold text-foreground mb-2">Planning</h4>
          <p class="text-sm text-muted-foreground">
            Creating detailed project roadmap and architecture
          </p>
        </div>

        <!-- Development -->
        <div class="text-center">
          <div
            class="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
          >
            <span class="text-primary font-bold text-lg">3</span>
          </div>
          <h4 class="font-semibold text-foreground mb-2">Development</h4>
          <p class="text-sm text-muted-foreground">
            Agile development with regular updates and feedback
          </p>
        </div>

        <!-- Deployment -->
        <div class="text-center">
          <div
            class="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center"
          >
            <span class="text-accent font-bold text-lg">4</span>
          </div>
          <h4 class="font-semibold text-foreground mb-2">Deployment</h4>
          <p class="text-sm text-muted-foreground">
            Launch and ongoing support with monitoring
          </p>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="text-center mt-16">
      <h3 class="text-2xl font-bold text-foreground mb-4">
        Ready to Start Your Project?
      </h3>
      <p class="text-muted-foreground mb-8 max-w-2xl mx-auto">
        Let's discuss how we can help transform your ideas into powerful
        software solutions that drive your business forward.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onclick="handleScheduleCall()"
          class="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
        >
          Schedule Consultation
        </button>
        <button
          onclick="handleViewPortfolio()"
          class="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-lg border border-border hover:bg-muted bg-transparent transition-colors"
        >
          View Our Work
        </button>
      </div>
    </div>
  </div>
</section>`;

export default Service;
