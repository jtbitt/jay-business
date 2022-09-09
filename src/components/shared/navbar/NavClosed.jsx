import React, { useEffect, useRef } from "react";

import { useScroll } from "@hooks";
import { MenuIcon } from "@icons";

export const NavClosed = ({ onNavOpen, visible }) => {
  const { scrollTop } = useScroll();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.backgroundPositionY = "-" + scrollTop + "px";
    }
  }, [scrollTop]);

  const openNav = () => {
    onNavOpen(true);
  };

  return (
    <div
      ref={ref}
      className={`fixed z-20 w-full top-0 left-0 right-0 px-7 lg:px-[4.5rem] 2xl:px-[33.5rem] py-4 md:py-7 bg-xs sm:bg-md 2xl:bg-lg bg-cover border-transparent ${visible}`}
    >
      <button
        onClick={openNav}
        onKeyDown={(e) => {
          if (e.key !== "Tab") openNav();
        }}
        aria-label="Open Side Navigation"
      >
        <MenuIcon className="h-12 w-12 md:h-16 md:w-16 2xl:h-20 2xl:w-20" />
      </button>
    </div>
  );
};
