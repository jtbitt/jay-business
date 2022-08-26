import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { StaticImage } from "gatsby-plugin-image";

import { useScroll } from "@hooks";
import { google, github, linkedin } from "@images/social-icons";
import links from "@content/links.json";
import socials from "@content/socials.json";

const icons = {
  google: google,
  github: github,
  linkedin: linkedin,
};

export const Navbar = ({ onNavToggle }) => {
  const { scrollTop } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.backgroundPositionY = "-" + scrollTop + "px";
    }
  }, [scrollTop]);

  const toggleNav = () => {
    setMenuOpen(!menuOpen);
    onNavToggle();
  };

  return (
    <>
      {!menuOpen && (
        <nav
          ref={ref}
          className={`fixed z-20 w-full top-0 left-0 right-0 px-7 lg:px-[4.5rem] py-7 bg-xs sm:bg-md xl:bg-lg bg-cover border-transparent`}
        >
          <MenuIcon className="h-12 w-12 md:h-16 md:w-16" onClick={toggleNav} />
        </nav>
      )}
      {menuOpen && (
        <div className="fixed flex flex-col justify-between items-center py-8 z-20 h-full w-full">
          <XIcon
            className="absolute right-8 lg:right-20 z-30 h-12 w-12 md:h-12 md:w-12"
            onClick={toggleNav}
          />
          <div className="flex flex-col items-center">
            <StaticImage
              src="../images/logo.webp"
              alt="logo"
              layout="constrained"
              className="w-14 md:w-24"
            />
            <div className="text-md md:text-2xl mt-5 w-[4.5rem] md:w-56">
              Front End Developer
            </div>
          </div>
          <ul className="text-white font-medium text-sm md:text-xl w-full">
            {links.map((link, key) => (
              <li
                key={key}
                className={`flex justify-center items-center h-16 ${
                  key % 2 ? "" : "bg-gray-600/20"
                }`}
                onClick={toggleNav}
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
              >
                <img
                  className="h-8 w-8"
                  src={icons[social.name]}
                  alt={social.name}
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
