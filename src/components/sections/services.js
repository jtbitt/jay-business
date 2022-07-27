import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Button from "../button";
import Skill from "../skill";

const Services = () => {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-4xl font-montserrat">Services</h1>
      <p>
        I'm always interested in collaborating on ambitious projects, helping
        other developers, and consulting with tech companies and startups.
      </p>
      <h1 className="text-4xl font-montserrat">Coding</h1>
      <div className="flex flex-col sm:flex-row justify-between content-start gap-8">
        <StaticImage
          src="../images/coding.png"
          alt="A photo of Jay"
          layout="fullWidth"
          className="basis-1/2"
        />
        <div className="basis-1/2 flex flex-col gap-8">
          <p>
            Lorem ipsum dolor sit amet consecte adipiscing elit iaculis. Lorem
            ipsum dolor sit amet consectetur adipiscing.
          </p>
          <div className="grid grid-cols-2 gap-5 place-content-center">
            <Skill name={"Front End"} />
            <Skill name={"Productivity Improvement"} />
            <Skill name={"Automated Integration"} />
            <Skill name={"Performance Testing Tools"} />
          </div>
          <Button name="HIRE ME"></Button>
        </div>
      </div>
      <h1 className="text-4xl font-montserrat">Mentoring</h1>
      <div className="flex flex-col sm:flex-row justify-between content-start gap-8">
        <StaticImage
          src="../images/mentoring.jpg"
          alt="A photo of Jay"
          layout="fullWidth"
          className="basis-1/2"
        />
        <div className="basis-1/2 flex flex-col gap-8">
          <p>
            Lorem ipsum dolor sit amet consecte adipiscing elit iaculis. Lorem
            ipsum dolor sit amet consectetur adipiscing.
          </p>
          <Button name="CONTACT ME"></Button>
        </div>
      </div>
      <h1 className="text-4xl font-montserrat">Web page for 1k$</h1>
      <div className="flex flex-col sm:flex-row justify-between content-start gap-8">
        <StaticImage
          src="../images/1kwebpage.jpg"
          alt="A photo of Jay"
          layout="fullWidth"
          className="basis-1/2"
        />
        <div className="basis-1/2 flex flex-col gap-8">
          <p>
            Lorem ipsum dolor sit amet consecte adipiscing elit iaculis. Lorem
            ipsum dolor sit amet consectetur adipiscing.
          </p>
          <Button name="GET IT"></Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
