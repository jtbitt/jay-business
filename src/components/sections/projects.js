import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Heading from "../heading";
import Button from "../button";

const Projects = () => {
  return (
    <section className="space-y-8 md:space-y-10">
      <Heading type="h1">Cool Things I've Built</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <StaticImage
          src="../../images/project.png"
          alt="A photo of Jay"
          layout="fullWidth"
        />
        <div className="space-y-6 md:space-y-8">
          <Heading type="h2">Project Name</Heading>
          <div className="space-y-2">
            <Heading type="h5" basicFont="true">
              Subtitle
            </Heading>
            <p className="text-sm md:text-base font-light tracking-widest">
              Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis.
            </p>
          </div>
          <div className="space-y-2">
            <Heading type="h5" basicFont="true">
              Development Tools
            </Heading>
            <p className="text-sm md:text-base font-light tracking-widest">
              Lorem ipsum, lorem ipsum, lorem.
            </p>
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
