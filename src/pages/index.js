import * as React from "react";

import { useImages } from "@hooks";
import {
  SEO,
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

export const Head = () => <SEO />;
