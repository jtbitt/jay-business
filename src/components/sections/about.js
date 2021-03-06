import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Heading from "../heading";
import Button from "../button";

const About = () => {
  return (
    <section className="space-y-8 md:space-y-10">
      <Heading type="h1">About me</Heading>
      <div className="flex flex-col sm:flex-row justify-between content-start gap-8 md:gap-16">
        <StaticImage
          src="../../images/about.jpg"
          alt="A photo of Jay"
          layout="fullWidth"
          className="basis-1/2"
        />
        <div className="basis-1/2 space-y-8">
          <p className="text-base md:text-lg font-light tracking-wider leading-6 md:leading-6">
            Travel enthusiast who loves to spend my time in Latin America,
            currently planning a trip to the jungle. Life has been a great
            adventure since I learned to code. When it comes to work, I love
            tackling interesting challenges that lead to growth. Dove all in on
            knowing coding and starting from the ground up and have built myself
            into an experienced Front End developer. I feel like I've maximized
            and optimized what I can do in my previous roles and I'm ready to
            dig deeper and gain some new experiences.
          </p>
          <p className="text-base md:text-lg font-light tracking-wider leading-6 md:leading-6">
            Would love to work on exciting React-based projects and/or with
            experienced developers.
          </p>
          <div className="text-center md:text-left">
            <Button name="MY RESUME"></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
