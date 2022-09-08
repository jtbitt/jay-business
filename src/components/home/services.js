import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { Heading, Description, Button, Skill } from "@components";
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
          <div className="space-y-8 md:space-y-10" key={key}>
            <Heading type="h3" size="text-4xl md:text-5.5xl 2xl:text-6xl">
              {service.name}
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <GatsbyImage image={images[service.image]} alt={service.alt} />
              <div className="space-y-8">
                <Description>{service.description}</Description>
                <div className="grid grid-cols-2 gap-6">
                  {service.skills.map((skill, key) => (
                    <Skill name={skill} key={key} />
                  ))}
                </div>
                <div className="text-center md:text-left">
                  <Link to={service.callToAction.link}>
                    <Button name={service.callToAction.name}></Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
