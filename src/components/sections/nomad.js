import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../button";

const Nomad = () => {
  return (
    <section className="space-y-8 md:space-y-10">
      <h1 className="text-4xl md:text-5xl font-montserrat">Nomad Life</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis. Lorem
        ipsum dolor sit amet con.
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StaticImage
          src="../../images/nomad1.png"
          alt="A photo of Jay"
          layout="fullWidth"
          className="rounded"
        />
        <StaticImage
          src="../../images/nomad2.png"
          alt="A photo of Jay"
          layout="fullWidth"
          className="rounded"
        />
        <StaticImage
          src="../../images/nomad3.png"
          alt="A photo of Jay"
          layout="fullWidth"
          className="rounded"
        />
        <StaticImage
          src="../../images/nomad4.png"
          alt="A photo of Jay"
          layout="fullWidth"
          className="rounded"
        />
      </div>
      <div className="text-center">
        <Button name="GET IN TOUCH"></Button>
      </div>
    </section>
  );
};

export default Nomad;
