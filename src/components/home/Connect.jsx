import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import { Heading, Description, Button } from "@components";

export const Connect = ({ images }) => {
  return (
    <section className="space-y-12 pt-36" id="connect" aria-label="Connect">
      <Heading type="h2">Let's Connect</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <GatsbyImage
          image={images.connect}
          alt="A laptop computer open on a desk with a Front End Developer services website open"
        />
        <div className="text-center md:text-left space-y-12">
          <Description>If you would like to work together</Description>
          <Button name="GET IN TOUCH"></Button>
        </div>
      </div>
    </section>
  );
};
