import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { ArrowDownIcon } from "@heroicons/react/solid";

import Heading from "@components/heading";
import Button from "@components/button";

const Start = ({ images }) => {
  return (
    <section id="start">
      <div className="flex flex-col justify-center content-start gap-16 h-screen">
        <Heading type="h1" className="leading-tight md:leading-tight md:w-3/4">
          Hi, I'm Jay <br /> Front End Developer
        </Heading>
        <Link to="#about">
          <Button name="ABOUT ME"></Button>
        </Link>
        <Link to="#start2">
          <ArrowDownIcon className="h-8 md:h-12 w-8 md:w-12" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 h-screen" id="start2">
        <GatsbyImage
          image={images.intro}
          alt=""
          className="row-start-1 md:row-start-1 col-start-1 md:col-start-3 row-end-auto col-end-auto"
        />
        <div className="grid row-start-1 col-start-1 row-end-auto col-end-auto place-content-around md:place-content-center md:gap-16 relative">
          <Heading type="h1" className="leading-tight md:leading-tight">
            And I like to build cool things
          </Heading>
          <div className="space-y-10 md:space-y-16">
            <Button name="CONTACT ME"></Button>
            <Link to="#connect">
              <ArrowDownIcon className="h-8 md:h-12 w-8 md:w-12" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
