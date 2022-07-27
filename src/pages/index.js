import * as React from "react";
import Layout from "../components/layout";
import Start from "../components/sections/start";
import About from "../components/sections/about";
import Projects from "../components/sections/projects";
import Services from "../components/sections/services";
import Connect from "../components/sections/connect";

const IndexPage = () => {
  return (
    <Layout pageTitle="About Me">
      <Start />
      <About />
      <Projects />
      <Services />
      <Connect />
    </Layout>
  );
};

export default IndexPage;
