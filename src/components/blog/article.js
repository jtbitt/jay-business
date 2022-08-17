import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Heading from "@components/heading";
import Description from "@components/description";
import Button from "@components/button";

const Article = ({ image, alt, title, slug }) => {
  const img = getImage(image);

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <GatsbyImage image={img} alt={alt} />
      <div className="space-y-6 md:space-y-8">
        <Heading type="h2">{title}</Heading>
        <div className="space-y-2">
          <Heading type="h5" basicFont="true">
            Lorem ipsum dolor sit amet consectet adipiscing elit iaculis. Lorem
            ipsum.
          </Heading>
          <Description>
            Lorem ipsum dolor sit amet consectet adipiscing elit iaculis. Lorem
            ipsum dolor sit amet consectetur adipiscing elit iaculis. Lorem
            ipsum dolor sit.
          </Description>
        </div>
        <div className="text-center md:text-left">
          <Link to={`/blog/${slug}`}>
            <Button name="READ IT"></Button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Article;
