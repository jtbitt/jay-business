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
import richResults from "@content/rich-results";

export const IndexPage = () => {
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
      {JSON.stringify(richResults.index)}
    </script>
  </Seo>
);
