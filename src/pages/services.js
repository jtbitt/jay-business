import * as React from "react";

import {
  Layout,
  Heading,
  Description,
  Button,
  ServiceOption,
} from "@components";
import serviceDetails from "@content/service-details.json";

export const ServicesPage = () => {
  return (
    <Layout className="space-y-8">
      <Heading type="h1" className="text-center">
        Elevate your projects
      </Heading>
      <Heading type="h4" className="text-center px-40">
        Stop searching endlessly for a solid contributor, elevate your projects
        with a seasoned Front-End Developer - React, CSS, HTML, and JS done
        right.
      </Heading>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {serviceDetails.map((service, key) => (
          <ServiceOption {...service} key={key} />
        ))}
      </section>
      <section>
        <Heading type="h1">How it works</Heading>
        <div className="grid grid-cols-1 md:grid-cols-3"></div>
      </section>
      <section>
        <Heading type="h1">FAQ</Heading>
        <div classNAme="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Heading type="h5">
              Which types of work am I interested in doing when it comes to
              coding?
            </Heading>
            <Description>
              I'm open to all opportunities whether it's short term contract
              work
            </Description>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
