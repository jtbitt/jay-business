import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import projects from "@content/projects.json";
import Project from "@components/projects/project";
import Heading from "@components/heading";
import Button from "@components/button";

const Projects = ({ images }) => {
  return (
    <section className="space-y-8 md:space-y-10">
      <Heading type="h1">Cool Things I've Built</Heading>
      {projects.map((project, key) => (
        <Project
          image={project.image}
          alt={project.image}
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          tools={project.tools}
          key={key}
        />
      ))}
    </section>
  );
};

export default Projects;
