import * as React from "react";

import { useImages } from "./home/hooks/useImages";
import Layout from "@components/layout";
import Start from "./home/components/start";
import About from "./home/components/about";
import Skills from "./home/components/skills";
import Nomad from "./home/components/nomad";
import Projects from "./home/components/projects";
import Services from "./home/components/services";
import Connect from "./home/components/connect";

const IndexPage = () => {
  const { images } = useImages();

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
