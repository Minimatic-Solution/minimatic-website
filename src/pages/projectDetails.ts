import { html } from "hono/html";
import ProjectDetailsHeader from "../components/project-detilas/projectDetailsHeader";
import ProjectDetailsInfo from "../components/project-detilas/projectDetailsInfo";
import projects from "../data/projects.json" assert { type: "json" };

const ProjectDetails = (id: string) => {
  const project = projects.find((p) => p.id === id);
  if (!project)
    return html`<p class="text-center py-16">❌ Project not found.</p>`;

  return html`
    <section class="pb-16">
      <!-- Hero Section -->
      ${ProjectDetailsHeader(
        project.image,
        project.title,
        project.logo,
        project.description,
        project.previewUrl
      )}

      <!-- Project Details Info -->
      ${ProjectDetailsInfo(
        project.client,
        project.year,
        project.metrics,
        project.features,
        project.technologies,
        project.gallery,
        project.title
      )}
    </section>
  `;
};

export default ProjectDetails;
