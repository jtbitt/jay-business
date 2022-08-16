import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import Heading from "@components/heading";
import Button from "@components/button";

const Connect = ({ images }) => {
  return (
    <section className="space-y-12">
      <Heading type="h1">Let's Connect</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="order-1 md:-order-1 text-center md:text-left space-y-12">
          <p className="text-base md:text-lg font-bold tracking-widest">
            If you would like to work together
          </p>
          <Button name="GET IN TOUCH"></Button>
        </div>
        <GatsbyImage image={images.connect} alt="" />
      </div>
    </section>
  );
};

export default Connect;
