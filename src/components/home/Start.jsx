import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { ArrowDownIcon } from "@icons";
import { Heading, Button } from "@components";

export const Start = ({ images }) => {
  images.intro.width = 430;
  return (
    <section id="start" aria-label="Start">
      <div className="flex flex-col justify-center gap-14 md:gap-16 h-[calc(100vh-3.75rem)] xl:h-screen">
        <Heading
          type="h1"
          size="text-4xl md:text-5.5xl 2xl:text-6xl"
          className="leading-tight md:leading-tight md:w-3/4"
        >
          Hi, I'm Jay <br /> Front-End <br className="block md:hidden" />{" "}
          Developer
        </Heading>
        <Link to="#start2" className="mt-5" aria-label="Go to next section">
          <ArrowDownIcon className="h-8 md:h-12 2xl:h-16 w-8 md:w-12 2xl:w-16" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 h-screen" id="start2">
        <GatsbyImage
          image={images.intro}
          alt="Front-End Developer Jay Bittner standing and staring at the camera with his own shadow in the background"
          className="row-start-1 col-start-1 md:col-start-3 row-end-auto col-end-auto"
        />
        <div className="grid row-start-1 col-start-1 row-end-auto col-end-auto md:col-end-3 content-around md:content-center md:gap-16 relative">
          <Heading type="h2" className="leading-tight md:leading-tight">
            And I like to build <br className="hidden md:block" /> cool things
          </Heading>
          <div className="flex flex-col gap-6 md:gap-16">
            <Link to="/services">
              <Button>HIRE ME</Button>
            </Link>
            <Link
              to="#services"
              className="mt-5"
              aria-label="Go to next section"
            >
              <ArrowDownIcon className="h-8 md:h-12 2xl:h-16 w-8 md:w-12 2xl:w-16" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
