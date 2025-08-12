import { projects } from "../Data/Projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
