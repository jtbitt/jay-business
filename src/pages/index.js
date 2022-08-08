import * as React from "react";
import Layout from "@components/layout";
import Start from "./home/components/start";
import About from "./home/components/about";
import Skills from "./home/components/skills";
import Nomad from "./home/components/nomad";
import Projects from "./home/components/projects";
import Services from "./home/components/services";
import Connect from "./home/components/connect";

const IndexPage = () => {
  return (
    <Layout pageTitle="About Me">
      <Start />
      <About />
      <Skills />
      <Nomad />
      <Projects />
      <Services />
      <Connect />
    </Layout>
  );
};

export default IndexPage;
