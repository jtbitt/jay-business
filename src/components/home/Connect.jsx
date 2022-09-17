import React, { useState, useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { PopupButton } from "react-calendly";

import { Heading, Description } from "@components";
import { GithubIcon, LinkedinIcon } from "@icons";

export const Connect = ({ images }) => {
  const [portal, setPortal] = useState(null);

  useEffect(() => {
    const root = document.getElementById('portal');
    setPortal(root);
  }, []);

  return (
    <section className="space-y-12 pt-36" id="connect" aria-label="Connect">
      <Heading type="h2">Connect</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <GatsbyImage
          image={images.connect}
          alt="A laptop computer open on a desk with a Front End Developer services website open"
        />
        <div className="text-left space-y-8">
          <Heading type="h3" basicFont={true}>Let's build something <br /> amazing together</Heading>
          <Description>
            Start by scheduling a&nbsp;
            <PopupButton
              url="https://calendly.com/jaybittner/15min"
              rootElement={portal}
              className="text-base md:text-lg 2xl:text-xl font-light tracking-widest text-amber-500"
              text="Meeting"
            />
            &nbsp;/&nbsp;
            <Link className="text-amber-500" to="">
              Email Me
            </Link>
          </Description>
          <Description>OR</Description>
          <Description>
            Take a look at my&nbsp;
            <Link className="text-amber-500" to="/services">
              Services
            </Link>
          </Description>
          <div className="flex flex-row gap-8 h-16">
            <GithubIcon className="h-8 w-8 2xl:h-12 2xl:w-12" />
            <LinkedinIcon className="h-8 w-8 2xl:h-12 2xl:w-12" />
          </div>
        </div>
      </div>
    </section>
  );
};
