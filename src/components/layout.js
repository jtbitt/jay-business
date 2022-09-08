import React, { useState } from "react";

import { Navbar } from "@components";

export const Layout = ({ children, className = "" }) => {
  const [showContent, setShowContent] = useState(true);

  const handleNavToggle = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="text-white">
      <Navbar onNavToggle={handleNavToggle} />
      <main
        className={`px-9 lg:px-20 2xl:px-[34rem] pb-16 md:pt-[7.5rem] ${
          showContent ? "visible" : "invisible"
        } ${className}`}
      >
        {children}
      </main>
    </div>
  );
};
