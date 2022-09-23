import React from "react";

import { useSiteMetadata } from "@hooks";
import logo from "@images/logo-square.png";

export const Seo = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <meta
        name="ahrefs-site-verification"
        content="62c91a1a72f8db4cc79f7f08b3e11c71560859e59ec1eba3f30c6d0ea6405e29"
      ></meta>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={logo} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={logo} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  );
};
