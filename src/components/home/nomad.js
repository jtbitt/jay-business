import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { Heading, Description, Button } from "@components";

export const Nomad = ({ images }) => {
  return (
    <section className="space-y-8 md:space-y-10 pt-36" id="nomad">
      <Heading type="h1">Travel</Heading>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis. Lorem
        ipsum dolor sit amet con.
      </Description>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Object.values(images).map((image, key) => {
          return <GatsbyImage image={image} alt="" key={key} />;
        })}
      </div>
      <div className="text-center">
        <Link to="#connect">
          <Button name="GET IN TOUCH"></Button>
        </Link>
      </div>
    </section>
  );
};
