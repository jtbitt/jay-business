import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Heading, Description, ExternalLink } from "@components";

export const Post = ({
  date,
  title,
  image,
  alt,
  imageLink,
  imageCredit,
  children,
}) => {
  const img = getImage(image);

  return (
    <div className="xl:px-40 space-y-8">
      <Description>{date}</Description>
      <Heading type="h1" size="text-4xl md:text-5.5xl 2xl:text-6xl">
        {title}
      </Heading>
      <GatsbyImage image={img} alt={alt} className="h-40 md:h-80" />
      <Description>
        Photo Credit:{" "}
        <ExternalLink href={imageLink}>{imageCredit}</ExternalLink>
      </Description>
      <div className="text-base md:text-lg 2xl:text-xl font-light tracking-widest space-y-10">
        {children}
      </div>
    </div>
  );
};
