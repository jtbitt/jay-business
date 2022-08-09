import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "./navbar";

const Layout = ({ pageTitle, children }) => {
  const [showContent, setShowContent] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setScrollPosition(winScroll);
  };

  const handleNavToggle = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Navbar onNavToggle={handleNavToggle} scrollPosition={scrollPosition} />
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
