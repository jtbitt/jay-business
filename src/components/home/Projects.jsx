import * as React from "react";

import { Project, Heading } from "@components";
import projects from "@content/projects.json";

export const Projects = ({ images }) => {
  return (
    <section
      className="space-y-8 md:space-y-10 pt-36"
      id="projects"
      aria-label="Projects"
    >
      <Heading type="h2">Cool Things I've Built</Heading>
      <div className="space-y-20">
        {projects.map((project, key) => (
          <Project {...project} image={images[project.image]} key={key} />
        ))}
      </div>
    </section>
  );
};
