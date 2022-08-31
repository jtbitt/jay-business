import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Navbar } from "@components";

export const Layout = ({ pageTitle, children, className = "" }) => {
  const [showContent, setShowContent] = useState(true);

  const handleNavToggle = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="text-white">
      <title>
        Hello
        {/* {pageTitle} | {data.site.siteMetadata.title} */}
      </title>
      <Navbar onNavToggle={handleNavToggle} />
      <main
        className={`px-9 lg:px-20 2xl:px-[34rem] pb-16 mt-[7.25rem] ${
          showContent ? "visible" : "invisible"
        } ${className}`}
      >
        {children}
      </main>
    </div>
  );
};
