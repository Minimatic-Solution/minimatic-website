import { html } from "hono/html";

const ContactForm = () => html`
  <section
    class="fade-in stagger-1 scroll-reveal"
    role="form"
    aria-labelledby="contact-form-title"
  >
    <article
      class="contact-card p-8 lg:p-10 rounded-3xl border border-gray-200 shadow-xl"
    >
      <h2
        id="contact-form-title"
        class="text-3xl font-bold font-serif mb-6 text-gray-800"
      >
        Send Us a Message
      </h2>
      <form class="space-y-6" id="contactForm">
        <!-- Name Fields -->
        <fieldset class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <legend class="sr-only">Personal Information</legend>
          <div>
            <label
              for="firstName"
              class="block text-sm font-semibold text-gray-700 mb-2"
              >First Name *</label
            >
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              aria-required="true"
              aria-describedby="firstName-error"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 input-glow transition-all duration-300"
              placeholder="John"
              autocomplete="given-name"
            />
            <div id="firstName-error" class="sr-only" aria-live="polite"></div>
          </div>
          <div>
            <label
              for="lastName"
              class="block text-sm font-semibold text-gray-700 mb-2"
              >Last Name *</label
            >
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              aria-required="true"
              aria-describedby="lastName-error"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 input-glow transition-all duration-300"
              placeholder="Doe"
              autocomplete="family-name"
            />
            <div id="lastName-error" class="sr-only" aria-live="polite"></div>
          </div>
        </fieldset>

        <!-- Contact Information -->
        <fieldset class="space-y-6">
          <legend class="sr-only">Contact Information</legend>
          <!-- Email -->
          <div>
            <label
              for="email"
              class="block text-sm font-semibold text-gray-700 mb-2"
              >Email Address *</label
            >
            <input
              type="email"
              id="email"
              name="email"
              required
              aria-required="true"
              aria-describedby="email-error"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 input-glow transition-all duration-300"
              placeholder="john.doe@example.com"
              autocomplete="email"
            />
            <div id="email-error" class="sr-only" aria-live="polite"></div>
          </div>

          <!-- Phone -->
          <div>
            <label
              for="phone"
              class="block text-sm font-semibold text-gray-700 mb-2"
              >Phone Number</label
            >
            <input
              type="tel"
              id="phone"
              name="phone"
              aria-describedby="phone-error"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 input-glow transition-all duration-300"
              placeholder="+1 (555) 123-4567"
              autocomplete="tel"
            />
            <div id="phone-error" class="sr-only" aria-live="polite"></div>
          </div>
        </fieldset>

        <!-- Project Information -->
        <fieldset class="space-y-6">
          <legend class="sr-only">Project Information</legend>
          <!-- Project Type -->
          <div>
            <label
              for="projectType"
              class="block text-sm font-semibold text-gray-700 mb-2"
              >Project Type *</label
            >
            <select
              id="projectType"
              name="projectType"
              required
              aria-required="true"
              aria-describedby="projectType-error"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 input-glow transition-all duration-300"
            >
              <option value="">Select a project type</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-app">Mobile App Development</option>
              <option value="ecommerce">E-commerce Solutions</option>
              <option value="custom-software">Custom Software</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="consultation">Technical Consultation</option>
              <option value="other">Other</option>
            </select>
            <div
              id="projectType-error"
              class="sr-only"
              aria-live="polite"
            ></div>
          </div>

          <!-- Message -->
          <div>
            <label
              for="message"
              class="block text-sm font-semibold text-gray-700 mb-2"
              >Project Details *</label
            >
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              aria-required="true"
              aria-describedby="message-error"
              class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 input-glow transition-all duration-300 resize-none"
              placeholder="Tell us about your project, goals, and any specific requirements..."
            ></textarea>
            <div id="message-error" class="sr-only" aria-live="polite"></div>
          </div>
        </fieldset>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          aria-describedby="submit-info"
        >
          Send Message
        </button>
        <div id="submit-info" class="sr-only">
          Your message will be sent to our team and we'll respond within 2-4
          hours during business days.
        </div>
      </form>
    </article>
  </section>
`;

export default ContactForm;
