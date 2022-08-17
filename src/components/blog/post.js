import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Heading from "@components/heading";

const Post = ({ date, title, image, alt, imageLink, imageCredit, body }) => {
  const img = getImage(image);

  return (
    <div className="space-y-8">
      <p className="text-sm md:text-base font-light tracking-widest">{date}</p>
      <Heading type="h1">{title}</Heading>
      <GatsbyImage image={img} alt={alt} className="h-40 md:h-80" />
      <p className="text-sm md:text-base font-light tracking-widest">
        Photo Credit: <a href={imageLink}>{imageCredit}</a>
      </p>
      <div className="text-sm md:text-base font-light tracking-widest">
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </div>
  );
};

export default Post;
