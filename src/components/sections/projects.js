import * as React from "react";

import Button from "../button";

const Projects = () => {
  return (
    <section>
      <div className="flex flex-col justify-between content-start h-screen">
        <h1 className="text-4xl font-montserrat">Cool Things I've Built</h1>
        <Button name="GET IN TOUCH"></Button>
      </div>
      <div className="flex flex-col justify-between content-start h-screen">
        <h1 className="text-4xl font-montserrat">Project Name</h1>
        <Button name="CHECK PROJECT"></Button>
        <Button name="CHECK CODE"></Button>
      </div>
    </section>
  );
};

export default Projects;
