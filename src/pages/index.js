import * as React from "react";

import { useImages } from "@hooks";
import {
  Layout,
  Start,
  About,
  Skills,
  Nomad,
  Projects,
  Services,
  Connect,
} from "@components";

export const IndexPage = () => {
  const { start, about, nomad, projects, services, connect } = useImages();

  return (
    <Layout pageTitle="About Me" className="mt-0">
      <Start images={start} />
      <About images={about} />
      <Skills />
      <Nomad images={nomad} />
      <Projects images={projects} />
      <Services images={services} />
      <Connect images={connect} />
    </Layout>
  );
};

export default IndexPage;
