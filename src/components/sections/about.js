import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../button";
import Skill from "../skill";

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
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-montserrat">Skills</h1>
        <div className="flex flex-col xl:flex-row gap-16">
          <div className="flex flex-col basis-full xl:basis-3/5 gap-6">
            <div className="text-base font-montserrat">Technical Skills</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6">
              <Skill name={"HTML5, CSS3"} />
              <Skill name={"Javascript Typescript"} />
              <Skill name={"Angular"} />
              <Skill name={"State Management"} />
              <Skill name={"React"} />
              <Skill name={"Components"} />
              <Skill name={"Testing"} />
              <Skill name={"Optimize Performance"} />
              <Skill name={"APIs (GraphQL, Rest)"} />
              <Skill name={"Git, VSCode"} />
              <Skill name={"Agile (JIRA, Scrum, Kanban)"} />
            </div>
          </div>
          <div className="flex flex-col basis-full xl:basis-2/5 gap-6">
            <div className="text-base font-montserrat">Soft Skills</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 place-content-start gap-6">
              <Skill name={"Proactive"} />
              <Skill name={"Communication"} />
              <Skill name={"Problem Solving"} />
              <Skill name={"Time Management"} />
              <Skill name={"Adaptable"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between content-start">
        <h1 className="text-4xl font-montserrat">Nomad Life</h1>
        <Button name="GET IN TOUCH"></Button>
      </div>
    </section>
  );
};

export default About;
