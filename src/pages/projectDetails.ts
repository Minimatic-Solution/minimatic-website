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
      ${ProjectDetailsHeader({
        image: project.image,
        title: project.title,
        logo: project.logo,
        description: project.description,
        previewUrl: project.previewUrl,
      })}

      <!-- Project Details Info -->
      ${ProjectDetailsInfo({
        client: project.client,
        year: project.year,
        metrics: project.metrics,
        features: project.features,
        technologies: project.technologies,
        gallery: project.gallery,
        title: project.title,
      })}
    </section>
  `;
};

export default ProjectDetails;
