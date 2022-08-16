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
