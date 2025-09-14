import { html } from "hono/html";

const NotFound = () => html`
  <section
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 text-center"
  >
    <!-- Big 404 -->
    <h1
      class="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-lg"
    >
      404
    </h1>

    <!-- Message -->
    <p class="mt-6 text-2xl md:text-3xl font-semibold text-gray-700">
      Oops! The page you're looking for doesn’t exist.
    </p>
    <p class="mt-2 text-gray-500 max-w-xl">
      It might have been removed, renamed, or did not exist in the first place.
    </p>

    <!-- CTA Button -->
    <div class="mt-8">
      <a
        href="/"
        class="inline-block px-8 py-3 rounded-2xl text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
      >
        ⬅ Back to Home
      </a>
    </div>

    <!-- Decorative element -->
    <div class="absolute bottom-6 text-sm text-gray-400">
      © ${new Date().getFullYear()} Minimatic Solutions
    </div>
  </section>
`;

export default NotFound;
