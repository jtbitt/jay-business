import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import Heading from "@components/heading";
import Button from "@components/button";

const Nomad = ({ images }) => {
  return (
    <section className="space-y-8 md:space-y-10">
      <Heading type="h1">Nomad Life</Heading>
      <p className="text-sm md:text-base font-light tracking-widest">
        Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis. Lorem
        ipsum dolor sit amet con.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Object.values(images).map((image, key) => {
          return <GatsbyImage image={image} alt="" key={key} />;
        })}
      </div>
      <div className="text-center">
        <Button name="GET IN TOUCH"></Button>
      </div>
    </section>
  );
};

export default Nomad;
