import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../button";

const Start = () => {
  return (
    <section>
      <div className="flex flex-col justify-center content-start h-screen gap-20">
        <h1 className="sm:w-3/4 text-4xl sm:text-5xl font-montserrat">
          Hi, I'm Jay <br /> Front End Developer
        </h1>
        <Button name="ABOUT ME"></Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 h-screen">
        <StaticImage
          className="row-start-1 sm:row-start-1 col-start-1 sm:col-start-3 row-end-auto col-end-auto"
          layout="fullWidth"
          alt=""
          src={"../images/intro.jpg"}
          formats={["auto", "webp"]}
        />
        <div className="grid row-start-1 col-start-1 row-end-auto col-end-auto place-items-center relative">
          <h1 className="text-4xl font-montserrat">
            And I like to build cool things
          </h1>
          <Button name="CONTACT ME"></Button>
        </div>
      </div>
    </section>
  );
};

export default Start;
