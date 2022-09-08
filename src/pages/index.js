import * as React from "react";

import { useImages } from "@hooks";
import {
  Seo,
  Layout,
  Start,
  About,
  Skills,
  Travel,
  Projects,
  Services,
  Connect,
} from "@components";

export const IndexPage = () => {
  const { start, about, travel, projects, services, connect } = useImages();

  return (
    <Layout className="pt-0">
      <Start images={start} />
      <Services images={services} />
      <Projects images={projects} />
      <About images={about} />
      <Skills />
      <Travel images={travel} />
      <Connect images={connect} />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <Seo>
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://www.jaybittner.com",
          "name": "Jay Bittner",
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "jaybittner@gmail.com",
            "contactType": "Customer Support"
          }
        }
      `}
    </script>
  </Seo>
);
