import { html } from "hono/html";

const PrivacyPolicyInfo = () => html`
  <section class="container py-12 text-muted-foreground">
    <div class="max-w-3xl mx-auto space-y-8">
      <h1 class="text-3xl font-bold text-foreground">Privacy Policy</h1>
      <p>
        At <strong>Minimatic Solutions</strong>, we prioritize the privacy of
        our users, clients, and partners. This Privacy Policy explains how we
        collect, use, disclose, and protect your information when you interact
        with our services, including through our website and software solutions.
        By using our services, you agree to the collection and use of
        information in accordance with this policy.
      </p>

      <h2 class="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p>
        We collect different types of information to provide and improve our
        services for you, including:
      </p>

      <h3 class="text-xl font-medium mt-4 mb-1">Personal Data</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Your name, email address, phone number, and company details.</li>
        <li>
          Information related to your or your employer’s relationship with
          Minimatic Solutions.
        </li>
        <li>Data received from third parties.</li>
        <li>Information needed for legal and compliance purposes.</li>
        <li>
          Feedback or preferences to improve our products, services, and
          customer satisfaction.
        </li>
      </ul>

      <h3 class="text-xl font-medium mt-4 mb-1">
        Cookies and Tracking Technologies
      </h3>
      <p>
        We use cookies and similar technologies to monitor website traffic and
        enhance your experience. Additionally, we use internet tags (also known
        as action tags) that may be deployed through third-party advertising or
        web analytics partners. These help us:
      </p>
      <ul class="list-disc list-inside space-y-1">
        <li>Track the effectiveness of ads</li>
        <li>Measure user interaction with our site</li>
        <li>Analyze overall website usage</li>
      </ul>
      <p>
        🔗
        <a
          href="https://thenai.org/"
          target="_blank"
          class="text-accent underline"
          >Network Advertising Initiative</a
        >
      </p>

      <h3 class="text-xl font-medium mt-4 mb-1">Google Analytics</h3>
      <p>
        We use Google Analytics to improve traffic flow between our websites,
        optimize web pages, and track conversions and usage patterns. Data is
        anonymized before transmission to Google servers.
      </p>
      <p>
        Learn more:
        <a
          href="https://support.google.com/analytics/answer/2763052"
          target="_blank"
          class="text-accent underline"
          >Google Analytics IP Anonymization</a
        >
      </p>
      <p>
        To disable cookies:
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          class="text-accent underline"
          >Opt-out Browser Add-on</a
        >
      </p>

      <h2 class="text-2xl font-semibold mt-6 mb-2">
        How We Use Your Information
      </h2>
      <ul class="list-disc list-inside space-y-1">
        <li>Provide, maintain, and improve our services</li>
        <li>Respond to inquiries and support requests</li>
        <li>Personalize and enhance your website experience</li>
        <li>Analyze service usage for improvements</li>
        <li>Communicate updates, offers, and relevant content</li>
      </ul>

      <h2 class="text-2xl font-semibold mt-6 mb-2">
        Transfer or Sharing of Personal Data
      </h2>
      <h3 class="text-xl font-medium mt-4 mb-1">
        Minimatic Solutions Affiliates
      </h3>
      <p>
        Your data may be shared with our entities or third-party processors for
        service delivery, technical support, marketing, or analytics.
      </p>
      <h3 class="text-xl font-medium mt-4 mb-1">Legal Requirements</h3>
      <p>
        We may disclose information to comply with applicable laws, legal
        processes, or to protect Minimatic Solutions’ rights, property, or
        safety.
      </p>

      <h2 class="text-2xl font-semibold mt-6 mb-2">
        Your Data Protection Rights
      </h2>
      <ul class="list-disc list-inside space-y-1">
        <li>Access and update your personal data</li>
        <li>Request deletion of your personal information</li>
        <li>Object to or restrict certain processing</li>
        <li>Withdraw consent at any time</li>
      </ul>
      <p>
        To exercise these rights, email us at:
        <a href="mailto:privacy@minimatic.com" class="text-accent underline"
          >privacy@minimatic.com</a
        >
      </p>

      <h2 class="text-2xl font-semibold mt-6 mb-2">Data Retention</h2>
      <p>
        We retain your personal data only as long as necessary for the purposes
        outlined in this policy, or to comply with legal obligations, resolve
        disputes, and enforce agreements.
      </p>

      <h2 class="text-2xl font-semibold mt-6 mb-2">Links to Other Websites</h2>
      <p>
        Our site may contain links to external websites not operated by
        Minimatic Solutions. We are not responsible for the privacy practices or
        content on these sites. We encourage you to review their privacy
        policies before engaging with them.
      </p>

      <h2 class="text-2xl font-semibold mt-6 mb-2">
        Changes to This Privacy Policy
      </h2>
      <p>
        We may update this Privacy Policy periodically. Any changes will be
        posted on this page with the updated effective date. Please check back
        regularly to stay informed.
      </p>

      <h2 class="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p>If you have any questions, please contact us:</p>
      <p><strong>Minimatic Solutions</strong></p>
      <p>📧 privacy@minimatic.com</p>
      <p>📞 +880 1723-100925</p>
      <p>📍 Padma Abashik, Rajshahi</p>
    </div>
  </section>
`;

export default PrivacyPolicyInfo;
