/** @jsxImportSource hono/jsx */
import { Hono } from "hono";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";

const app = new Hono();

app.get("/", (c) => {
  return c.html(
    RootLayout({
      title: "Minimatic Solutions",
      children: Home(),
    })
  );
});

export default app;
