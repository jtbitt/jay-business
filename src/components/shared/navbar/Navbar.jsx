import React, { useState } from "react";

import { useScroll } from "@hooks";
import { NavClosed } from "./NavClosed";
import { NavOpen } from "./NavOpen";

export const Navbar = ({ onNavToggle }) => {
  const [navOpen, setNavOpen] = useState(false);
  const { enable, disable } = useScroll();

  const handleNavToggle = (toggle) => {
    setNavOpen(toggle);
    onNavToggle();
    toggle ? disable() : enable();
  };

  return (
    <nav>
      <NavClosed
        onNavOpen={handleNavToggle}
        visible={navOpen ? "invisible" : "visible"}
      />
      <NavOpen
        onNavClose={handleNavToggle}
        visible={navOpen ? "visible" : "invisible"}
      />
    </nav>
  );
};
