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

const IndexPage = () => {
  const { start, about, travel, projects, services, connect } = useImages();

  return (
    <Layout paddingTop={false}>
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
          "@type": "Corporation",
          "name": "Jay Bittner LLC",
          "alternateName": "Jay Bittner",
          "url": "https://www.jaybittner.com",
          "logo": "${"/logo.png"}",
          "sameAs": "https://github.com/jtbitt"
        }
      `}
    </script>
  </Seo>
);
