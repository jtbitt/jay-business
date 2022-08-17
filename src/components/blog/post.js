import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Heading from "@components/heading";
import Description from "@components/description";

const Post = ({ date, title, image, alt, imageLink, imageCredit, body }) => {
  const img = getImage(image);

  return (
    <div className="space-y-8">
      <Description>{date}</Description>
      <Heading type="h1">{title}</Heading>
      <GatsbyImage image={img} alt={alt} className="h-40 md:h-80" />
      <Description>
        Photo Credit: <a href={imageLink}>{imageCredit}</a>
      </Description>
      <Description>
        <MDXRenderer>{body}</MDXRenderer>
      </Description>
    </div>
  );
};

export default Post;
