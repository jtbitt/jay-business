import React, { useState } from "react";

import { useScroll } from "@hooks";
import { NavClosed } from "./NavClosed";
import { NavOpen } from "./NavOpen";

export const Navbar = ({ onNavToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { enable, disable } = useScroll();

  const handleNavToggle = (toggle) => {
    setMenuOpen(toggle);
    onNavToggle();
    toggle ? enable() : disable();
  };

  return (
    <nav>
      <NavClosed
        onNavOpen={handleNavToggle}
        visible={menuOpen ? "invisible" : "visible"}
      />
      <NavOpen
        onNavClose={handleNavToggle}
        visible={menuOpen ? "visible" : "invisible"}
      />
    </nav>
  );
};
