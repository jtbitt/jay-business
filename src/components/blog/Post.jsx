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
    <div className="xl:px-40 space-y-8">
      <Description>{date}</Description>
      <Heading type="h2">{title}</Heading>
      <GatsbyImage image={img} alt={alt} className="h-40 md:h-80" />
      <Description>
        Photo Credit:{" "}
        <a
          href={imageLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-500"
        >
          {imageCredit}
        </a>
      </Description>
      <div className="text-base md:text-lg 2xl:text-xl font-light tracking-widest space-y-10">
        {children}
      </div>
    </div>
  );
};
