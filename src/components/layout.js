import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { Navbar } from "@components";

export const Layout = ({ pageTitle, children, className }) => {
  const [showContent, setShowContent] = useState(true);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const handleNavToggle = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="text-white bg-[url('../images/background.webp')] bg-contain bg-left-top">
      <img src="../images/background.webp" loading="eager" className="hidden" />
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Navbar onNavToggle={handleNavToggle} />
      <main
        className={`px-9 lg:px-20 pb-16 mt-[7.25rem] ${
          showContent ? "visible" : "invisible overflow-hidden"
        } ${className}`}
      >
        {children}
      </main>
    </div>
  );
};
