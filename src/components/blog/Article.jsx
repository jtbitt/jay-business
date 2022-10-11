import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Heading, Description, Button } from "@components";

export const Article = ({ date, image, alt, title, description, slug }) => {
  const img = getImage(image);

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <GatsbyImage image={img} alt={alt} className="xl:h-96" />
      <div className="space-y-6 md:space-y-8">
        <Description>{date}</Description>
        <Heading type="h3">{title}</Heading>
        <div className="space-y-2">
          <Description>{description}</Description>
        </div>
        <div className="text-center md:text-left">
          <Link to={`/blog/${slug}/`}>
            <Button>READ IT</Button>
          </Link>
        </div>
      </div>
    </article>
  );
};
