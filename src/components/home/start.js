import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { ArrowDownIcon } from "@icons";
import { Heading, Button } from "@components";

export const Start = ({ images }) => {
  return (
    <section id="start" className="md:pt-8">
      <div className="flex flex-col justify-center gap-14 md:gap-16 h-screen">
        <Heading type="h1" className="leading-tight md:leading-tight md:w-3/4">
          <span className="block md:hidden">
            Hi, I'm Jay <br /> Front End <br /> Developer
          </span>
          <span className="hidden md:block">
            Hi, I'm Jay <br /> Front End Developer
          </span>
        </Heading>
        <Link to="#services">
          <Button name="GET STARTED"></Button>
        </Link>
        <Link to="#start2" className="mt-5">
          <ArrowDownIcon className="h-8 md:h-12 2xl:h-16 w-8 md:w-12 2xl:w-16" />
        </Link>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-3 h-screen pt-6 md:pt-16"
        id="start2"
      >
        <GatsbyImage
          image={images.intro}
          alt=""
          className="row-start-1 col-start-1 md:col-start-3 row-end-auto col-end-auto"
        />
        <div className="grid row-start-1 col-start-1 row-end-auto col-end-auto md:col-end-3 content-around md:content-center md:gap-16 relative">
          <Heading type="h1" className="leading-tight md:leading-tight">
            <span className="block md:hidden">
              And I like to build cool things
            </span>
            <span className="hidden md:block">
              And I like to build <br /> cool things
            </span>
          </Heading>
          <div className="flex flex-col gap-6 md:gap-16">
            <Link to="#connect">
              <Button name="CONTACT ME"></Button>
            </Link>
            <Link to="#services" className="mt-5">
              <ArrowDownIcon className="h-8 md:h-12 2xl:h-16 w-8 md:w-12 2xl:w-16" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
