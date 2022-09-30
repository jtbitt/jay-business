import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Heading, Description } from "@components";

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
    <div className="space-y-8">
      <Description>{date}</Description>
      <Heading type="h1">{title}</Heading>
      <GatsbyImage image={img} alt={alt} className="h-40 md:h-80" />
      <Description>
        Photo Credit: <a href={imageLink}>{imageCredit}</a>
      </Description>
      <Description>{children}</Description>
    </div>
  );
};
