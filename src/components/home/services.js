import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import Heading from "@components/heading";
import Button from "@components/button";
import Skill from "@components/skill";
import services from "@content/services.json";

const Services = ({ images }) => {
  return (
    <section className="space-y-8 md:space-y-10">
      <Heading type="h1">Services</Heading>
      <p className="text-sm md:text-base font-light tracking-widest">
        I'm always interested in collaborating on ambitious projects, helping
        other developers, and consulting with tech companies and startups.
      </p>
      <div className="space-y-20">
        {services.map((service, key) => (
          <div className="space-y-8 md:space-y-10" key={key}>
            <Heading type="h1">{service.name}</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <GatsbyImage
                image={images[service.image]}
                alt={service.alt}
                layout="fullWidth"
              />
              <div className="space-y-8">
                <p className="text-sm md:text-base font-light tracking-widest">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {service.skills.map((skill, key) => (
                    <Skill name={skill} key={key} />
                  ))}
                </div>
                <div className="text-center md:text-left">
                  <Button name="HIRE ME"></Button>
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
