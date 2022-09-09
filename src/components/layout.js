import React, { useState } from "react";

import { Navbar } from "@components";

export const Layout = ({
  children,
  paddingHorizontal = true,
  paddingTop = true,
  className = "",
}) => {
  const [showContent, setShowContent] = useState(true);
  const px = paddingHorizontal ? "px-9 lg:px-20 2xl:px-[34rem]" : "";
  const pt = paddingTop ? "pt-24 md:pt-32" : "";

  const handleNavToggle = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="text-white">
      <Navbar onNavToggle={handleNavToggle} />
      <main
        className={`${px} ${pt} ${
          showContent ? "visible" : "invisible"
        } ${className}`}
      >
        {children}
      </main>
    </div>
  );
};
