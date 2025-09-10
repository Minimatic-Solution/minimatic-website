import { Hono } from "hono";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import PrivacyPolicy from "./pages/privacyPolicy";
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
      title: "Project Details | Minimatic Solutions",
      children: ProjectDetails(id),
    })
  );
});

app.get("/privacy-policy", (c) => {
  return c.html(
    RootLayout({
      title: "Privacy Policy | Minimatic Solutions",
      children: PrivacyPolicy(),
    })
  );
});

export default app;
