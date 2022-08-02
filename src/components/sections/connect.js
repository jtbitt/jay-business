import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../button";

const Connect = () => {
  return (
    <section className="space-y-12">
      <h1 className="text-4xl md:text-5xl">Let's Connect</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="order-1 md:-order-1 text-center md:text-left space-y-12">
          <p className="text-xl">If you would like to work together</p>
          <Button name="GET IN TOUCH"></Button>
        </div>
        <StaticImage
          src="../../images/connect.jpg"
          alt="A photo of Jay"
          layout="fullWidth"
        />
      </div>
    </section>
  );
};

export default Connect;
