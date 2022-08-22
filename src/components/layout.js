import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from "./navbar";

const Layout = ({ pageTitle, children, className }) => {
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
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Navbar onNavToggle={handleNavToggle} />
      <main
        className={`px-9 lg:px-20 pb-16 mt-[7.25rem] space-y-20 ${
          showContent ? "visible" : "invisible overflow-hidden"
        } ${className}`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
