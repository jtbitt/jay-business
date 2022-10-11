import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { Heading, Description, Button, Skill } from "@components";

export const ServicePreview = ({
  name,
  alt,
  image,
  description,
  highlights,
  callToAction,
}) => {
  return (
    <div className="space-y-8 md:space-y-10">
      <Heading type="h3" size="text-4xl md:text-5.5xl 2xl:text-6xl">
        {name}
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <GatsbyImage image={image} alt={alt} />
        <div className="space-y-8">
          <Description>{description}</Description>
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, key) => (
              <Skill name={highlight} key={key} />
            ))}
          </div>
          <div className="text-center md:text-left">
            <Link to={`${callToAction.link}/`}>
              <Button>{callToAction.name}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
