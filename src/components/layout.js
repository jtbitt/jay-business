import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { MenuIcon } from "@heroicons/react/solid";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <nav className="fixed top-6 left-6">
        <MenuIcon className="h-16 w-16" />
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
