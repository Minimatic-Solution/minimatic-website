import { html } from "hono/html";
import ContactForm from "./contactForm";
import ContactHeader from "./contactHeader";
import ContactInfo from "./contactInfo";

const Contact = () => html`
  <section
    id="contact"
    class="relative py-20 lg:py-32 overflow-hidden"
    role="main"
    aria-labelledby="contact-title"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-mesh" aria-hidden="true"></div>
    <div
      class="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl floating-element"
      aria-hidden="true"
    ></div>
    <div
      class="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl floating-element"
      style="animation-delay: -3s;"
      aria-hidden="true"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
      ${ContactHeader()}

      <div class="grid lg:grid-cols-2 gap-16 mb-20">
        ${ContactForm()} ${ContactInfo()}
      </div>
    </div>

    <!-- Schema Markup for SEO -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Us - Minimatic Solutions",
        "description": "Get in touch with Minimatic Solutions for your web development, mobile app development, and custom software needs.",
        "mainEntity": {
          "@type": "Organization",
          "name": "Minimatic Solutions",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Padma Garden, Road No 3, Padma Abasahik",
            "addressLocality": "Rajshahi",
            "addressCountry": "BD"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+8801723100925",
              "contactType": "customer service",
              "availableLanguage": ["English", "Bengali"]
            },
            {
              "@type": "ContactPoint",
              "email": "hello@minimaticsolutions.com",
              "contactType": "customer service"
            }
          ],
          "sameAs": [
            "https://x.com/shahinali_dev",
            "https://www.linkedin.com/in/takiuddin-ahmed-871607b5/",
            "https://github.com/Minimatic-Solution"
          ]
        }
      }
    </script>
  </section>
`;

export default Contact;
