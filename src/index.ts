/** @jsxImportSource hono/jsx */
import { Hono } from "hono";
import { html } from "hono/html";
import RootLayout from "./layouts/RootLayout";

const app = new Hono();

app.get("/", (c) => {
  return c.html(
    RootLayout({
      title: "Minimatic Solutions",
      children: html`
        <section class="text-center">
          <h1 class="text-4xl font-bold text-blue-600">
            Welcome to Minimatic Solutions
          </h1>
          <p class="mt-4 text-lg text-gray-600">
            We build modern software solutions with Hono, Cloudflare & Tailwind
            CSS.
          </p>
        </section>
      `,
    })
  );
});

export default app;
