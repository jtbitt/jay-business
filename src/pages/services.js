import * as React from "react";

import {
  Seo,
  Layout,
  Heading,
  Description,
  ServiceOption,
  Faq,
} from "@components";
import services from "@content/services.json";
import faqs from "@content/faqs.json";
import richResults from "@content/rich-results";

const ServicesPage = () => {
  return (
    <Layout>
      <div>
        <Heading
          type="h1"
          size="text-4xl md:text-5.5xl 2xl:text-6xl"
          className="text-center mb-8"
        >
          Accelerate your projects
        </Heading>
        <Description className="md:px-32 lg:px-36 xl:px-40 text-center mb-8">
          Stop searching endlessly for a solid contributor. Let's focus on
          what's important and start building the projects that you care about
          today.
        </Description>
        <section
          className="grid grid-cols-1 xl:grid-cols-3 gap-10 md:px-32 lg:px-40 xl:px-0 mb-20"
          aria-label="Select Product"
        >
          {services.map((service, key) => (
            <ServiceOption {...service} key={key} />
          ))}
        </section>
        <section aria-label="Frequently Asked Questions">
          <Heading type="h2" className="mb-8 md:mb-10">
            FAQ
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {faqs.map((faq, key) => (
              <Faq {...faq} key={key} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ServicesPage;

export const Head = () => (
  <Seo
    title="Services | Jay Bittner"
    description="Elevate your projects with a seasoned Front-End Developer"
    pathname="/services"
  >
    <script type="application/ld+json">
      {JSON.stringify(richResults.services)}
    </script>
  </Seo>
);
