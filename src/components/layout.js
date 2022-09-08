import React, { useState } from "react";

import { Navbar } from "@components";

export const Layout = ({ children, paddingTop, className = "" }) => {
  const [showContent, setShowContent] = useState(true);
  const pt = paddingTop === false ? "" : "pt-24 md:pt-32";

  const handleNavToggle = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="text-white">
      <Navbar onNavToggle={handleNavToggle} />
      <main
        className={`px-9 lg:px-20 2xl:px-[34rem] pb-16 ${pt} ${
          showContent ? "visible" : "invisible"
        } ${className}`}
      >
        {children}
      </main>
    </div>
  );
};
