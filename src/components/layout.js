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
    <div className="px-9 lg:px-20">
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <nav className="fixed z-20 w-full top-0 left-0 right-0 p-7 lg:p-[4.5rem] pb-0 lg:pb-0 bg-[url('../images/background.webp')]">
        <MenuIcon className="h-12 w-12 md:h-16 md:w-16" />
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
