import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "../components/navbar";

const Layout = ({ pageTitle, children }) => {
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
        className={`px-9 lg:px-20 pb-9 space-y-20 h-96 ${
          showContent ? "visible" : "invisible"
        }`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
