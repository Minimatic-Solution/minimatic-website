/** @jsxImportSource hono/jsx */
import { Hono } from "hono";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import ProjectDetails from "./pages/projectDetails";

const app = new Hono();

app.get("/", (c) => {
  return c.html(
    RootLayout({
      title: "Minimatic Solutions",
      children: Home(),
    })
  );
});

app.get("/projects/:id", (c) => {
  const id = c.req.param("id");
  return c.html(
    RootLayout({
      title: "Project Details",
      children: ProjectDetails(id),
    })
  );
});

export default app;
