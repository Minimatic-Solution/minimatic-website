import { html } from "hono/html";

const Navbar = () => html`
  <header class="bg-white shadow-md">
    <nav class="container mx-auto flex items-center justify-between py-4 px-6">
      <!-- Logo -->
      <a href="/" class="text-2xl font-bold text-blue-600">Minimatic</a>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li><a href="/" class="hover:text-blue-600">Home</a></li>
        <li><a href="/about" class="hover:text-blue-600">About</a></li>
        <li><a href="/services" class="hover:text-blue-600">Services</a></li>
        <li><a href="/contact" class="hover:text-blue-600">Contact</a></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button id="menu-toggle" class="md:hidden text-gray-700 text-2xl">
        ☰
      </button>
    </nav>

    <!-- Mobile Dropdown -->
    <div id="mobile-menu" class="hidden md:hidden bg-gray-100 px-6 py-4">
      <a href="/" class="block py-2 text-gray-700 hover:text-blue-600">Home</a>
      <a href="/about" class="block py-2 text-gray-700 hover:text-blue-600"
        >About</a
      >
      <a href="/services" class="block py-2 text-gray-700 hover:text-blue-600"
        >Services</a
      >
      <a href="/contact" class="block py-2 text-gray-700 hover:text-blue-600"
        >Contact</a
      >
    </div>

    <script>
      const toggleBtn = document.getElementById("menu-toggle");
      const mobileMenu = document.getElementById("mobile-menu");
      toggleBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    </script>
  </header>
`;
export default Navbar;
