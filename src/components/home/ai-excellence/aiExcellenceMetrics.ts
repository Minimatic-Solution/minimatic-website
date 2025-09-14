import { html } from "hono/html";

const AiExcellenceMetrics = () => html`
  <section
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 scroll-reveal"
    aria-labelledby="metrics-title"
    role="region"
  >
    <h2 id="metrics-title" class="sr-only">
      AI Development Performance Metrics
    </h2>

    <!-- Faster Development -->
    <article
      class="metric-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
      role="article"
      aria-labelledby="smart-code-title"
    >
      <div class="flex items-start justify-between mb-6">
        <div
          class="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg"
          role="img"
          aria-label="Lightning bolt icon representing speed"
        >
          <svg
            class="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <div class="text-right" role="img" aria-label="70% faster development">
          <div
            class="stats-counter text-4xl lg:text-5xl font-black text-blue-600 mb-1"
            aria-label="70 percent"
          >
            70%
          </div>
          <div class="text-sm text-gray-500 font-medium">Faster</div>
        </div>
      </div>
      <h3
        id="smart-code-title"
        class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors"
      >
        Smart Code Generation
      </h3>
      <p class="text-gray-600 leading-relaxed">
        AI-powered synthesis and intelligent auto-completion accelerate
        development while maintaining enterprise standards.
      </p>
    </article>

    <!-- Quality Assurance -->
    <article
      class="metric-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
      role="article"
      aria-labelledby="zero-bug-title"
    >
      <div class="flex items-start justify-between mb-6">
        <div
          class="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-lg"
          role="img"
          aria-label="Check mark icon representing quality"
        >
          <svg
            class="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div class="text-right" role="img" aria-label="99.9% quality assurance">
          <div
            class="stats-counter text-4xl lg:text-5xl font-black text-emerald-600 mb-1"
            aria-label="99.9 percent"
          >
            99.9%
          </div>
          <div class="text-sm text-gray-500 font-medium">Quality</div>
        </div>
      </div>
      <h3
        id="zero-bug-title"
        class="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors"
      >
        Zero-Bug Deployments
      </h3>
      <p class="text-gray-600 leading-relaxed">
        Self-learning test automation detects issues early with intelligent bug
        prevention and auto-fixes.
      </p>
    </article>

    <!-- Performance Optimization -->
    <article
      class="metric-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
      role="article"
      aria-labelledby="peak-performance-title"
    >
      <div class="flex items-start justify-between mb-6">
        <div
          class="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg"
          role="img"
          aria-label="Chart icon representing performance growth"
        >
          <svg
            class="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        </div>
        <div class="text-right" role="img" aria-label="40% performance boost">
          <div
            class="stats-counter text-4xl lg:text-5xl font-black text-purple-600 mb-1"
            aria-label="40 percent"
          >
            40%
          </div>
          <div class="text-sm text-gray-500 font-medium">Boost</div>
        </div>
      </div>
      <h3
        id="peak-performance-title"
        class="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors"
      >
        Peak Performance
      </h3>
      <p class="text-gray-600 leading-relaxed">
        ML algorithms optimize resources, predict scaling needs, and eliminate
        bottlenecks in real-time.
      </p>
    </article>

    <!-- Deployment Speed -->
    <article
      class="metric-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
      role="article"
      aria-labelledby="instant-deployment-title"
    >
      <div class="flex items-start justify-between mb-6">
        <div
          class="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg"
          role="img"
          aria-label="Cloud download icon representing deployment"
        >
          <svg
            class="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
            />
          </svg>
        </div>
        <div class="text-right" role="img" aria-label="90% faster deployment">
          <div
            class="stats-counter text-4xl lg:text-5xl font-black text-orange-600 mb-1"
            aria-label="90 percent"
          >
            90%
          </div>
          <div class="text-sm text-gray-500 font-medium">Faster</div>
        </div>
      </div>
      <h3
        id="instant-deployment-title"
        class="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors"
      >
        Instant Deployment
      </h3>
      <p class="text-gray-600 leading-relaxed">
        AI-driven CI/CD pipelines with intelligent rollbacks and seamless canary
        releases.
      </p>
    </article>
  </section>
`;
