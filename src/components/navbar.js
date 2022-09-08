import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { useScroll } from "@hooks";
import { MenuIcon, XIcon, GoogleIcon, GithubIcon, LinkedinIcon } from "@icons";
import links from "@content/links.json";
import socials from "@content/socials.json";

const socialIcons = {
  google: <GoogleIcon className="h-8 w-8 2xl:h-12 2xl:w-12" />,
  github: <GithubIcon className="h-8 w-8 2xl:h-12 2xl:w-12" />,
  linkedin: <LinkedinIcon className="h-8 w-8 2xl:h-12 2xl:w-12" />,
};

export const Navbar = ({ onNavToggle }) => {
  const { scrollTop, enable, disable } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.backgroundPositionY = "-" + scrollTop + "px";
    }
  }, [scrollTop]);

  const toggleNav = () => {
    menuOpen ? enable() : disable();
    setMenuOpen(!menuOpen);
    onNavToggle();
  };

  return (
    <nav>
      <div
        ref={ref}
        className={`fixed z-20 w-full top-0 left-0 right-0 px-7 lg:px-[4.5rem] 2xl:px-[33.5rem] py-4 md:py-7 bg-xs sm:bg-md 2xl:bg-lg bg-cover border-transparent ${
          !menuOpen ? "visible" : "invisible"
        }`}
      >
        <button
          onClick={toggleNav}
          onKeyDown={(e) => {
            if (e.key !== "Tab") toggleNav();
          }}
          aria-label="Open Side Navigation"
          className="cursor-default md:cursor-pointer"
        >
          <MenuIcon className="h-12 w-12 md:h-16 md:w-16 2xl:h-20 2xl:w-20" />
        </button>
      </div>
      <div
        className={`fixed flex flex-col justify-between items-center py-8 2xl:py-20 z-20 h-full w-full 2xl:px-[34.5rem] ${
          menuOpen ? "visible" : "invisible"
        }`}
        id="sidenav"
      >
        <button
          onClick={toggleNav}
          onKeyDown={(e) => {
            if (e.key !== "Tab") toggleNav();
          }}
          aria-label="Close Side Navigation"
          className="absolute right-8 lg:right-20 2xl:right-[34rem] z-30 cursor-default md:cursor-pointer"
        >
          <XIcon className="h-10 w-10 md:h-12 md:w-12 2xl:h-16 2xl:w-16" />
        </button>
        <div className="flex flex-col items-center">
          <Link
            to="/"
            aria-label="Go to homepage"
            onClick={toggleNav}
            onKeyDown={(e) => {
              if (e.key !== "Tab") toggleNav();
            }}
          >
            <StaticImage
              src="../images/logo.png"
              alt="Logo of the Jay Bittner business"
              layout="constrained"
              quality="100"
              className="w-14 md:w-24"
            />
          </Link>
          <div className="text-md md:text-2xl 2xl:text-3xl mt-5 w-[4.5rem] md:w-56 2xl:w-72">
            Front End Developer
          </div>
        </div>
        <ul className="text-white font-medium text-base md:text-xl 2xl:text-2xl w-full">
          {links.map((link, key) => (
            <li
              key={key}
              className={`flex justify-center items-center h-16 2xl:h-20 ${
                key % 2 ? "" : "bg-gray-600/20"
              }`}
              onClick={toggleNav}
              onKeyDown={(e) => {
                if (e.key !== "Tab") toggleNav();
              }}
            >
              <Link to={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-row justify-center items-center gap-8 h-16">
          {socials.map((social, key) => (
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              key={key}
              aria-label={social.name}
            >
              {socialIcons[social.name]}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
