import * as React from "react";

import { useImages } from "@hooks/useImages";

import Layout from "@components/layout";
import Start from "@components/home/start";
import About from "@components/home/about";
import Skills from "@components/home/skills";
import Nomad from "@components/home/nomad";
import Projects from "@components/home/projects";
import Services from "@components/home/services";
import Connect from "@components/home/connect";

const IndexPage = () => {
  const { start, about, nomad, projects, services, connect } = useImages();

  return (
    <Layout pageTitle="About Me">
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
