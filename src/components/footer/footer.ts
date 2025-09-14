import { html } from "hono/html";

const Footer = () => html`
  <footer
    class="bg-[#0d0d0d] text-gray-300 border-t border-gray-700"
    role="contentinfo"
    aria-label="Site footer"
  >
    <div class="container mx-auto px-4 py-12">
      <div class="grid md:grid-cols-4 gap-8">
        <!-- Brand -->
        <section aria-labelledby="brand-title">
          <h2 id="brand-title" class="text-2xl font-bold text-white mb-4">
            Minimatic Solutions
          </h2>
          <p class="text-sm leading-relaxed text-gray-400">
            Delivering full-cycle software solutions that empower businesses to
            grow, innovate, and succeed.
          </p>
        </section>

        <!-- Quick Links -->
        <nav aria-labelledby="quick-links-title">
          <h3 id="quick-links-title" class="font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul class="space-y-2 text-sm" role="list">
            <li role="listitem">
              <a
                href="#about"
                class="hover:text-accent transition-colors"
                aria-label="Learn more about us"
              >
                About Us
              </a>
            </li>
            <li role="listitem">
              <a
                href="#portfolio"
                class="hover:text-accent transition-colors"
                aria-label="View our services"
              >
                Services
              </a>
            </li>
            <li role="listitem">
              <a
                href="#projects"
                class="hover:text-accent transition-colors"
                aria-label="Browse our projects"
              >
                Projects
              </a>
            </li>
            <li role="listitem">
              <a
                href="#contact"
                class="hover:text-accent transition-colors"
                aria-label="Get in touch with us"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <!-- Services -->
        <nav aria-labelledby="services-title">
          <h3 id="services-title" class="font-semibold text-white mb-4">
            Services
          </h3>
          <ul class="space-y-2 text-sm" role="list">
            <li role="listitem">
              <a
                href="#services"
                class="hover:text-accent transition-colors"
                aria-label="Web development services"
              >
                Web Development
              </a>
            </li>
            <li role="listitem">
              <a
                href="#services"
                class="hover:text-accent transition-colors"
                aria-label="Mobile app development services"
              >
                Mobile Apps
              </a>
            </li>
            <li role="listitem">
              <a
                href="#services"
                class="hover:text-accent transition-colors"
                aria-label="AI and machine learning solutions"
              >
                AI & Machine Learning
              </a>
            </li>
            <li role="listitem">
              <a
                href="#services"
                class="hover:text-accent transition-colors"
                aria-label="Cloud computing solutions"
              >
                Cloud Solutions
              </a>
            </li>
          </ul>
        </nav>

        <!-- Contact -->
        <section aria-labelledby="footer-contact-title">
          <h3 id="footer-contact-title" class="font-semibold text-white mb-4">
            Contact
          </h3>
          <address class="not-italic">
            <ul class="space-y-3 text-sm" role="list">
              <li role="listitem">
                <a
                  href="tel:+8801723100925"
                  class="flex items-center hover:text-accent transition-colors"
                  aria-label="Call us at +880 1723-100925"
                >
                  <span aria-hidden="true">📞</span>
                  <span class="ml-2">+880 1723-100925</span>
                </a>
              </li>
              <li role="listitem">
                <a
                  href="mailto:contact@minimatic.solutions"
                  class="flex items-center hover:text-accent transition-colors"
                  aria-label="Email us at contact@minimatic.solutions"
                >
                  <span aria-hidden="true">✉️</span>
                  <span class="ml-2">contact@minimatic.solutions</span>
                </a>
              </li>
              <li
                role="listitem"
                class="flex items-start"
                itemscope
                itemtype="https://schema.org/PostalAddress"
              >
                <span aria-hidden="true">📍</span>
                <span class="ml-2" itemprop="streetAddress">
                  <span itemprop="addressLocality">Padma Abashik</span>,
                  <span itemprop="addressRegion">Rajshahi</span>
                </span>
              </li>
            </ul>
          </address>
        </section>
      </div>

      <!-- Bottom -->
      <div
        class="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400"
        role="region"
        aria-label="Footer bottom section"
      >
        <p>
          <span aria-label="Copyright ${new Date().getFullYear()}">
            © ${new Date().getFullYear()} Minimatic Solutions. All rights
            reserved.
          </span>
        </p>
        <nav class="flex space-x-4 mt-4 md:mt-0" aria-label="Legal links">
          <a
            href="/privacy-policy"
            class="hover:text-accent transition-colors"
            aria-label="Read our privacy policy"
          >
            Privacy Policy
          </a>
        </nav>
      </div>
    </div>
  </footer>
`;

export default Footer;
