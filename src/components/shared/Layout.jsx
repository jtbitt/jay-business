import React, { useState } from "react";
import { Gist } from "mdx-embed";
import { MDXProvider } from "@mdx-js/react";

import { Navbar } from "@components";

export const Layout = ({
  children,
  paddingHorizontal = true,
  paddingTop = true,
}) => {
  const [showContent, setShowContent] = useState(true);
  const px = paddingHorizontal ? "px-9 lg:px-20 2xl:px-[34rem]" : "px-0";
  const pt = paddingTop ? "pt-24 md:pt-32" : "pt-0";

  const handleNavToggle = () => {
    setShowContent(!showContent);
  };

  return (
    <MDXProvider components={{ Gist }}>
      <Navbar onNavToggle={handleNavToggle} />
      <main
        className={`${px} ${pt} pb-16 ${showContent ? "visible" : "invisible"}`}
      >
        {children}
      </main>
    </MDXProvider>
  );
};
