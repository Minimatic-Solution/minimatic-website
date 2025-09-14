import { html } from "hono/html";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbbar";

const RootLayout = (props: { title: string; children: any }) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${props.title} | Minimatic Solutions</title>

      <!-- SEO Meta -->
      <meta
        name="description"
        content="Minimatic Solutions is a software company providing services in web development, AI solutions, and digital transformation."
      />
      <meta name="author" content="Minimatic Solutions" />

      <!-- Favicon -->
      <link rel="icon" href="/icon/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="/icon/apple-touch-icon.png" />
      <link rel="icon" sizes="32x32" href="/icon/favicon-32x32.png" />
      <link rel="icon" sizes="16x16" href="/icon/favicon-16x16.png" />

      <!-- Canonical URL -->
      <link rel="canonical" href="https://minimatic.solutions/" />

      <!-- Open Graph (for social sharing) -->
      <meta
        property="og:title"
        content="${props.title} | Minimatic Solutions"
      />
      <meta
        property="og:description"
        content="Minimatic Solutions offers expert web development, AI-driven solutions, and digital transformation services."
      />
      <meta property="og:url" content="https://minimatic.solutions/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://minimatic.solutions/images/preview.png"
      />

      <!-- Styles -->
      <link href="/css/output.css" rel="stylesheet" />
    </head>
    <body class="font-sans min-h-screen bg-background text-gray-900">
      <header
        class="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
      >
        ${Navbar()}
      </header>

      <main id="main-content" class="min-h-[70vh]">${props.children}</main>

      ${Footer()}

      <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
      <script src="/js/index.js" type="module"></script>
    </body>
  </html>
`;

export default RootLayout;
