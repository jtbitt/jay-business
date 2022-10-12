import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { ExternalLink } from "@components";
import { XIcon, GoogleIcon, GithubIcon, LinkedinIcon } from "@icons";
import links from "@content/links.json";
import socials from "@content/socials.json";

const socialIcons = {
  google: <GoogleIcon className="h-8 w-8 2xl:h-12 2xl:w-12" />,
  github: <GithubIcon className="h-8 w-8 2xl:h-12 2xl:w-12" />,
  linkedin: <LinkedinIcon className="h-8 w-8 2xl:h-12 2xl:w-12" />,
};

export const NavOpen = ({ onNavClose, visible }) => {
  const closeNav = () => {
    onNavClose(false);
  };

  return (
    <div
      className={`fixed flex flex-col justify-between items-center py-8 2xl:py-20 z-20 h-full w-full 2xl:px-[34.5rem] ${visible}`}
      id="sidenav"
    >
      <button
        onClick={closeNav}
        onKeyDown={(e) => {
          if (e.key !== "Tab") closeNav();
        }}
        aria-label="Close Side Navigation"
        className="absolute right-8 lg:right-20 2xl:right-[34rem] z-30"
      >
        <XIcon className="h-10 w-10 md:h-12 md:w-12 2xl:h-16 2xl:w-16" />
      </button>
      <div className="flex flex-col items-center">
        <Link
          to={"/"}
          aria-label="Go to homepage"
          onClick={closeNav}
          onKeyDown={(e) => {
            if (e.key !== "Tab") closeNav();
          }}
        >
          <StaticImage
            src="../../../images/logo.png"
            alt="Logo of the Jay Bittner business"
            layout="constrained"
            quality="100"
            width={200}
            className="w-14 md:w-24"
          />
        </Link>
        <div className="text-md md:text-2xl 2xl:text-3xl mt-5 w-[4.5rem] md:w-56 2xl:w-72">
          Front-End Developer
        </div>
      </div>
      <ul className="text-white font-medium text-base md:text-xl 2xl:text-2xl w-full">
        {links.map((link, key) => (
          <li
            key={key}
            className={`flex justify-center items-center h-16 2xl:h-20 ${
              key % 2 ? "" : "bg-gray-600/20"
            }`}
          >
            <Link
              to={`${link.url}/`}
              onClick={closeNav}
              onKeyDown={(e) => {
                if (e.key !== "Tab") closeNav();
              }}
              className="text-white"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-row justify-center items-center gap-8 h-16">
        {socials.map((social, key) => (
          <ExternalLink
            url={social.url}
            key={key}
            label={social.name}
            className="text-white"
          >
            {socialIcons[social.name]}
          </ExternalLink>
        ))}
      </div>
    </div>
  );
};
