import React from "react";

import { useSiteMetadata } from "@hooks";

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
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta
        name="image"
        content={"https://www.jaybittner.com/logo-square.png"}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta
        name="twitter:image"
        content={"https://www.jaybittner.com/logo-square.png"}
      />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  );
};
