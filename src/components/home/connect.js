import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { Heading, Description, Button } from "@components";

export const Connect = ({ images }) => {
  return (
    <section className="space-y-12 pt-36" id="connect">
      <Heading type="h1">Let's Connect</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="order-1 md:-order-1 text-center md:text-left space-y-12">
          <Description>If you would like to work together</Description>
          <Button name="GET IN TOUCH"></Button>
        </div>
        <GatsbyImage image={images.connect} alt="" />
      </div>
    </section>
  );
};
