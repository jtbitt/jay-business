import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Heading, Description, Button } from "@components";

export const Project = ({
  image,
  alt,
  title,
  description,
  tools,
  slug,
}) => {
  const img = getImage(image);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <GatsbyImage image={img} alt={alt} />
      <div className="space-y-6 md:space-y-8">
        <Heading type="h3" size="text-4xl md:text-5.5xl 2xl:text-6xl">
          {title}
        </Heading>
        <div className="space-y-2">
          <Heading
            type="h4"
            size="text-xl md:text-2xl 2xl:text-3xl"
            basicFont={true}
          >
            Description
          </Heading>
          <Description>{description}</Description>
        </div>
        <div className="space-y-2">
          <Heading
            type="h4"
            size="text-xl md:text-2xl 2xl:text-3xl"
            basicFont={true}
          >
            Development Tools
          </Heading>
          <Description>{tools}</Description>
        </div>
        <div className="text-center md:text-left">
          <Link to={`/projects/${slug}`}>
            <Button>VIEW PROJECT</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
