import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import projects from "@content/projects.json";
import Heading from "@components/heading";
import Button from "@components/button";

const Projects = ({ images }) => {
  return (
    <section className="space-y-8 md:space-y-10">
      <Heading type="h1">Cool Things I've Built</Heading>
      {projects.map((project, key) => (
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
          key={key}
        >
          <GatsbyImage
            image={images[project.image]}
            alt={project.image}
            layout="fullWidth"
          />
          <div className="space-y-6 md:space-y-8">
            <Heading type="h2">{project.title}</Heading>
            <div className="space-y-2">
              <Heading type="h5" basicFont="true">
                {project.subtitle}
              </Heading>
              <p className="text-sm md:text-base font-light tracking-widest">
                {project.description}
              </p>
            </div>
            <div className="space-y-2">
              <Heading type="h5" basicFont="true">
                Development Tools
              </Heading>
              <p className="text-sm md:text-base font-light tracking-widest">
                {project.tools}
              </p>
            </div>
            <div className="text-center md:text-left">
              <Button name="VIEW PROJECT"></Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
