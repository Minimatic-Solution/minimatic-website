import { html } from "hono/html";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbbar";

const RootLayout = (props: { title: string; children: any }) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${props.title}</title>
      <link href="/css/output.css" rel="stylesheet" />
    </head>
    <body class="font-sans min-h-screen bg-background text-gray-900">
      ${Navbar()}
      <main class="">${props.children}</main>
    </body>
    ${Footer()}
    <script src="/js/index.js" type="module"></script>
  </html>
`;

export default RootLayout;
