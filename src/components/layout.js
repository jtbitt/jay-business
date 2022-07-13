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
      <nav className="fixed p-2 md:p-10 w-full z-10 top-0 left-0 right-0">
        <MenuIcon className="h-10 w-10 md:h-16 md:w-16" />
      </nav>
      <main className="px-14 md:px-40">{children}</main>
    </div>
  );
};

export default Layout;
