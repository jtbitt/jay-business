import * as React from "react";

import { Heading, Description } from "@components";
import { ServicePreview } from "./components";
import services from "@content/services.json";

export const Services = ({ images }) => {
  return (
    <section
      className="space-y-8 md:space-y-10 pt-36"
      id="services"
      aria-label="Services"
    >
      <Heading type="h2">Services</Heading>
      <Description>
        I'm always interested in collaborating on ambitious projects, helping
        other developers, and consulting with tech companies and startups.
      </Description>
      <div className="space-y-20">
        {services.map((service, key) => (
          <ServicePreview {...service} image={images[service.image]} key={key} />
        ))}
      </div>
    </section>
  );
};
