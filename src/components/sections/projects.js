import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../button";

const Projects = () => {
  return (
    <section className="space-y-10">
      <h1 className="text-4xl font-montserrat">Cool Things I've Built</h1>
      <div className="flex flex-col md:flex-row justify-between content-start gap-16">
        <StaticImage
          src="../../images/project.png"
          alt="A photo of Jay"
          layout="fullWidth"
          className="basis-1/2"
        />
        <div className="basis-1/2 space-y-6">
          <h1 className="text-4xl font-montserrat">Project Name</h1>
          <h3 className="text-xl font-bold">Subtitle</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis.</p>
          <h3 className="text-xl font-bold">Development Tools</h3>
          <p>Lorem ipsum, lorem ipsum, lorem.</p>
          <div className="space-x-6">
            <Button name="VIEW PROJECT"></Button>
            <Button name="VIEW CODE"></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
