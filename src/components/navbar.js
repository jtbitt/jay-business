import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = ({ onNavToggle, scrollPosition }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);
  const links = [
    { name: "About me", url: "/" },
    { name: "Cool things I've built", url: "/" },
    { name: "Services", url: "/" },
    { name: "Let's connect", url: "/" },
    { name: "Blog", url: "/" },
  ];
  const socials = [
    { name: "google", icon: require("../images/google.svg").default, url: "" },
    { name: "github", icon: require("../images/github.svg").default, url: "" },
    {
      name: "linkedin",
      icon: require("../images/linkedin.svg").default,
      url: "",
    },
  ];

  useEffect(() => {
    ref.current.style.backgroundPositionY = "-" + scrollPosition + "px";
  }, [scrollPosition]);

  const navToggle = () => {
    setMenuOpen(!menuOpen);
    onNavToggle();
  };

  return (
    <>
      {!menuOpen && (
        <nav
          ref={ref}
          id="closedNav"
          className={`fixed z-20 w-full top-0 left-0 right-0 px-7 lg:px-[4.5rem] py-7 bg-[url('../images/background.webp')] bg-cover`}
        >
          <MenuIcon className="h-12 w-12 md:h-16 md:w-16" onClick={navToggle} />
        </nav>
      )}
      {menuOpen && (
        <div className="fixed flex flex-col justify-between items-center py-8 z-20 h-full w-full">
          <XIcon
            className="absolute right-8 lg:right-20 z-30 h-12 w-12 md:h-12 md:w-12"
            onClick={navToggle}
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
              >
                <Link to={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-row justify-center items-center gap-8 h-16">
            {socials.map((social, key) => (
              <img
                key={key}
                className="h-8 w-8"
                src={social.icon}
                alt={social.name}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
