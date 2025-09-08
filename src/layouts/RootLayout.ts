import { html } from "hono/html";
import Navbar from "../components/navbar/Navbbar";

const RootLayout = (props: { title: string; children: any }) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${props.title}</title>
      <link href="/output.css" rel="stylesheet" />
      <script src="/scroll-reveal.js"></script>
    </head>
    <body class="font-sans min-h-screen bg-background text-gray-900">
      ${Navbar()}
      <main class="container mx-auto px-6 py-10">${props.children}</main>
    </body>
  </html>
`;

export default RootLayout;
