import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { Heading, Description, Button } from "@components";
import travelImages from "@content/travel";

export const Travel = ({ images }) => {
  return (
    <section
      className="space-y-8 md:space-y-10 pt-36"
      id="travel"
      aria-label="Travel"
    >
      <Heading type="h2">Travel</Heading>
      <Description>
        When I'm not coding, I love getting to know new people and cultures
      </Description>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {travelImages.map((image, key) => {
          return (
            <GatsbyImage image={images[image.name]} alt={image.alt} key={key} />
          );
        })}
      </div>
      <div className="text-center">
        <Link to="#connect">
          <Button>GET IN TOUCH</Button>
        </Link>
      </div>
    </section>
  );
};
