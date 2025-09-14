import { html } from "hono/html";

const AiExcellenceHeader = () => html`
  <header class="text-center mb-16 lg:mb-24 scroll-reveal">
    <div
      class="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 border border-blue-200"
      role="banner"
      aria-label="AI-Powered Development Badge"
    >
      <svg
        class="w-4 h-4 mr-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill-rule="evenodd"
          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
          clip-rule="evenodd"
        />
      </svg>
      <span>AI-Powered Development</span>
    </div>

    <h1
      class="text-4xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight"
      id="ai-excellence-title"
    >
      Build <span class="gradient-text">10X Faster</span><br />
      <span class="sr-only">with</span> with AI Excellence
    </h1>

    <p
      class="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed font-light"
      role="doc-subtitle"
      aria-describedby="ai-excellence-title"
    >
      Transform your development process with cutting-edge AI integration. Our
      engineers combine human expertise with intelligent automation to deliver
      <strong class="font-semibold text-gray-900"
        >enterprise-grade solutions</strong
      >
      at unprecedented speed.
    </p>
  </header>
`;
