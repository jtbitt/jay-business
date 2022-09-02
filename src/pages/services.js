import * as React from "react";

import {
  Layout,
  Heading,
  Description,
  Button,
  ServiceOption,
  Faq,
} from "@components";
import serviceDetails from "@content/service-details.json";
import faqs from "@content/faqs.json";

export const ServicesPage = () => {
  return (
    <Layout className="space-y-8">
      <Heading type="h1" className="text-center">
        Elevate your projects
      </Heading>
      <Description className="md:px-40">
        Stop searching endlessly for a solid contributor, elevate your projects
        with a seasoned Front-End Developer - React, CSS, HTML, and JS done
        right.
      </Description>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {faqs.map((faq, key) => (
            <Faq {...faq} key={key} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
