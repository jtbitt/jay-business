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
    <Layout pageTitle="Front End Developer | Jay Bittner" className="pt-0">
      <Start images={start} />
      <Services images={services} />
      <Projects images={projects} />
      <About images={about} />
      <Skills />
      <Nomad images={nomad} />
      <Connect images={connect} />
    </Layout>
  );
};

export default IndexPage;
