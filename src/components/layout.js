import React, { useState } from "react";

import { useSiteMetadata } from "@hooks";
import { Navbar } from "@components";

export const Layout = ({ pageTitle, children, className = "" }) => {
  const { title } = useSiteMetadata();
  const [showContent, setShowContent] = useState(true);

  const handleNavToggle = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="text-white">
      <title>
        {pageTitle} | {title}
      </title>
      <Navbar onNavToggle={handleNavToggle} />
      <main
        className={`px-9 lg:px-20 2xl:px-[34rem] pb-16 pt-[7.25rem] ${
          showContent ? "visible" : "invisible"
        } ${className}`}
      >
        {children}
      </main>
    </div>
  );
};
