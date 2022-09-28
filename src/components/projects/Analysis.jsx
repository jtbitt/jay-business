import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Heading, Description } from "@components";

export const Analysis = ({
  date,
  title,
  image,
  alt,
  designLink,
  designCredit,
  githubLink,
  projectLink,
  body,
}) => {
  const img = getImage(image);

  return (
    <div className="space-y-8">
      <Description>{date}</Description>
      <Heading type="h1">{title}</Heading>
      <GatsbyImage image={img} alt={alt} className="h-40 md:h-80" />
      <Description>
        Design Credit:{" "}
        <a
          href={designLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-500"
        >
          {designCredit}
        </a>
        <br />
        Github:{" "}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-500"
        >
          {title}
        </a>
        <br />
        Project Demo:{" "}
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-500"
        >
          {title}
        </a>
      </Description>
      <div className="text-base md:text-lg 2xl:text-xl font-light tracking-widest space-y-10">
        <MDXRenderer className="space-y-10">{body}</MDXRenderer>
      </div>
    </div>
  );
};
