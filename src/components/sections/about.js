import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../button";

const About = () => {
  return (
    <section>
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-montserrat">About me</h1>
        <div className="flex flex-col sm:flex-row justify-between content-start gap-8">
          <StaticImage
            src="../images/about.jpg"
            alt="A photo of Jay"
            layout="fullWidth"
            className="basis-1/2"
          />
          <div className="basis-1/2 flex flex-col gap-8">
            <p>
              Travel enthusiast who loves to spend my time in Latin America,
              currently planning a trip to the jungle. Life has been a great
              adventure since I learned to code. When it comes to work, I love
              tackling interesting challenges that lead to growth. Dove all in
              on knowing coding and starting from the ground up and have built
              myself into an experienced Front End developer. I feel like I've
              maximized and optimized what I can do in my previous roles and I'm
              ready to dig deeper and gain some new experiences.
            </p>
            <p>
              Would love to work on exciting React-based projects and/or with
              experienced developers.
            </p>
            <Button name="MY RESUME"></Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between content-start h-screen">
        <h1 className="text-4xl font-montserrat">Skills</h1>
      </div>
      <div className="flex flex-col justify-between content-start h-screen">
        <h1 className="text-4xl font-montserrat">Nomad Life</h1>
        <Button name="GET IN TOUCH"></Button>
      </div>
    </section>
  );
};

export default About;
