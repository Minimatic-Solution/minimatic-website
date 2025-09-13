import { html } from "hono/html";

const PrivacyPolicyHeader = () => html`
  <div
    class="relative h-[400px] lg:h-[500px] overflow-hidden bg-gradient-to-br from-accent to-purple-700"
  >
    <!-- Dark overlay for readability -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Floating Elements -->
    <div
      class="absolute top-20 left-10 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse"
    ></div>
    <div
      class="absolute bottom-10 right-10 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"
    ></div>
    <div
      class="absolute top-1/3 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-[float_8s_ease-in-out_infinite_reverse]"
    ></div>

    <!-- Content -->
    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
    >
      <h1 class="text-4xl lg:text-6xl font-bold mb-4 drop-shadow-xl">
        Privacy Policy
      </h1>
      <p class="text-lg max-w-2xl text-gray-100">
        Effective as of 01 January, 2030
      </p>
    </div>

    <!-- Decorative bottom wave -->
    <svg
      class="absolute bottom-0 left-0 w-full h-24 text-white/10"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      fill="currentColor"
    >
      <path
        d="M0,64L48,85.3C96,107,192,149,288,176C384,203,480,213,576,197.3C672,181,768,139,864,144C960,149,1056,203,1152,224C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>
`;

export default PrivacyPolicyHeader;
