import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import Heading from "@components/heading";
import Description from "@components/description";
import Button from "@components/button";
import Skill from "@components/skill";
import services from "@content/services.json";

const Services = ({ images }) => {
  return (
    <section className="space-y-8 md:space-y-10" id="services">
      <Heading type="h1">Services</Heading>
      <Description>
        I'm always interested in collaborating on ambitious projects, helping
        other developers, and consulting with tech companies and startups.
      </Description>
      <div className="space-y-20">
        {services.map((service, key) => (
          <div className="space-y-8 md:space-y-10" key={key}>
            <Heading type="h1">{service.name}</Heading>
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

export default Services;
