import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { ArrowDownIcon } from "@heroicons/react/solid";

import Heading from "../heading";
import Button from "../button";

const Start = () => {
  return (
    <section>
      <div className="flex flex-col justify-center content-start gap-16 h-screen">
        <Heading type="h1" className="leading-tight md:leading-tight md:w-3/4">
          Hi, I'm Jay <br /> Front End Developer
        </Heading>
        <Button name="ABOUT ME"></Button>
        <ArrowDownIcon className="h-8 md:h-12 w-8 md:w-12" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 h-screen">
        <StaticImage
          className="row-start-1 md:row-start-1 col-start-1 md:col-start-3 row-end-auto col-end-auto"
          layout="fullWidth"
          alt=""
          src={"../../images/intro.jpg"}
          formats={["auto", "webp"]}
        />
        <div className="grid row-start-1 col-start-1 row-end-auto col-end-auto place-content-around md:place-content-center md:gap-16 relative">
          <Heading type="h1" className="leading-tight md:leading-tight">
            And I like to build cool things
          </Heading>
          <div className="space-y-10 md:space-y-16">
            <Button name="CONTACT ME"></Button>
            <ArrowDownIcon className="h-8 md:h-12 w-8 md:w-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
