import { html } from "hono/html";

const Footer = () => html`
  <footer class="bg-[#0d0d0d] text-gray-300 border-t border-gray-700">
    <div class="container mx-auto px-4 py-12">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">
            Minimatic Solutions
          </h2>
          <p class="text-sm leading-relaxed text-gray-400">
            Delivering full-cycle software solutions that empower businesses to
            grow, innovate, and succeed.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold text-white mb-4">Quick Links</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#about" class="hover:text-accent">About Us</a></li>
            <li><a href="#services" class="hover:text-accent">Services</a></li>
            <li><a href="#projects" class="hover:text-accent">Projects</a></li>
            <li><a href="#contact" class="hover:text-accent">Contact</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-semibold text-white mb-4">Services</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="#services" class="hover:text-accent">Web Development</a>
            </li>
            <li>
              <a href="#services" class="hover:text-accent">Mobile Apps</a>
            </li>
            <li>
              <a href="#services" class="hover:text-accent"
                >AI & Machine Learning</a
              >
            </li>
            <li>
              <a href="#services" class="hover:text-accent">Cloud Solutions</a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-semibold text-white mb-4">Contact</h4>
          <ul class="space-y-3 text-sm">
            <li>
              <a
                href="tel:+8801723100925"
                class="flex items-center hover:text-accent"
              >
                📞 +880 1723-100925
              </a>
            </li>
            <li>
              <a
                href="mailto:info@minimatic.com"
                class="flex items-center hover:text-accent"
              >
                ✉️ info@minimatic.com
              </a>
            </li>
            <li class="flex items-start">
              📍 <span class="ml-2">Padma Abashik, Rajshahi</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400"
      >
        <p>
          © ${new Date().getFullYear()} Minimatic Solutions. All rights
          reserved.
        </p>
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="/privacy-policy" class="hover:text-accent">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
`;

export default Footer;
