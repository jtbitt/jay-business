import * as React from "react";

import { useImages } from "@hooks/useImages";

import Layout from "@components/layout";
import Start from "./components/start";
import About from "./components/about";
import Skills from "./components/skills";
import Nomad from "./components/nomad";
import Projects from "./components/projects";
import Services from "./components/services";
import Connect from "./components/connect";

const IndexPage = () => {
  const { images } = useImages();

  if (!Object.keys(images).length) {
    return <></>;
  }

  return (
    <Layout pageTitle="About Me">
      <Start images={images.start} />
      <About images={images.about} />
      <Skills />
      <Nomad images={images.nomad} />
      <Projects images={images.projects} />
      <Services images={images.services} />
      <Connect images={images.connect} />
    </Layout>
  );
};

export default IndexPage;
