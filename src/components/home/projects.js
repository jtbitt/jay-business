import * as React from "react";

import projects from "@content/projects.json";
import Project from "@components/projects/project";
import Heading from "@components/heading";

const Projects = ({ images }) => {
  return (
    <section className="space-y-8 md:space-y-10 pt-36" id="projects">
      <Heading type="h1">Cool Things I've Built</Heading>
      <div className="space-y-20">
        {projects.map((project, key) => (
          <Project
            image={images[project.image]}
            alt={project.image}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            tools={project.tools}
            slug={project.slug}
            key={key}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
