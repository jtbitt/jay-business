import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Heading from "@components/heading";
import Button from "@components/button";

const Project = ({ image, alt, title, subtitle, description, tools, slug }) => {
  const img = getImage(image);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <GatsbyImage image={img} alt={alt} />
      <div className="space-y-6 md:space-y-8">
        <Heading type="h2">{title}</Heading>
        <div className="space-y-2">
          <Heading type="h5" basicFont="true">
            {subtitle}
          </Heading>
          <p className="text-sm md:text-base font-light tracking-widest">
            {description}
          </p>
        </div>
        <div className="space-y-2">
          <Heading type="h5" basicFont="true">
            Development Tools
          </Heading>
          <p className="text-sm md:text-base font-light tracking-widest">
            {tools}
          </p>
        </div>
        <div className="text-center md:text-left">
          <Button name="VIEW PROJECT"></Button>
        </div>
      </div>
    </div>
  );
};

export default Project;
