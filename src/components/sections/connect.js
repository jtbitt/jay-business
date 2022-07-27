import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../button";

const Connect = () => {
  return (
    <section className="flex flex-col h-screen gap-8">
      <h1 className="text-4xl font-montserrat">Let's Connect</h1>
      <div className="flex flex-col sm:flex-row justify-between content-start gap-8">
        <div className="basis-1/2 flex flex-col gap-8">
          <Button name="GET IN TOUCH"></Button>
        </div>
        <StaticImage
          src="../images/connect.jpg"
          alt="A photo of Jay"
          layout="fullWidth"
          className="basis-1/2"
        />
      </div>
    </section>
  );
};

export default Connect;
