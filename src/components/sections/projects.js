import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../button";

const Projects = () => {
  return (
    <section className="space-y-8 md:space-y-10">
      <h1 className="text-4xl md:text-5xl">Cool Things I've Built</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <StaticImage
          src="../../images/project.png"
          alt="A photo of Jay"
          layout="fullWidth"
        />
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-4xl">Project Name</h1>
          <div className="space-y-2">
            <h3 className="text-base md:text-xl font-bold">Subtitle</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-base md:text-xl font-bold">
              Development Tools
            </h3>
            <p>Lorem ipsum, lorem ipsum, lorem.</p>
          </div>
          <div className="text-center md:text-left">
            <Button name="VIEW PROJECT"></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
