import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "../components/navbar";

const Layout = ({ pageTitle, children }) => {
  const [contentHidden, setContentHidden] = useState(false);
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
    setContentHidden(!contentHidden);
  };

  return (
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Navbar onNavToggle={handleNavToggle} />
      {!contentHidden && <main className="px-9 lg:px-20">{children}</main>}
    </div>
  );
};

export default Layout;
