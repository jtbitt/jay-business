import * as React from "react";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";

import Button from "../button";
import Skill from "../skill";

const Services = () => {
  const services = [
    {
      name: "Coding",
      image: "../../images/coding.png",
      alt: "several lines of code",
      description:
        "Lorem ipsum dolor sit amet consecte adipiscing elit iaculis. Lorem ipsum dolor sit amet consectetur adipiscing.",
      skills: [
        "Front End",
        "Productivity Improvement",
        "Automated Integration",
        "Performance Testing Tools",
      ],
      callToAction: { name: "HIRE ME", link: "" },
    },
    {
      name: "Mentoring",
      image: "../../images/mentoring.jpg",
      alt: "person talking with mentor on a video call",
      description:
        "Lorem ipsum dolor sit amet consecte adipiscing elit iaculis. Lorem ipsum dolor sit amet consectetur adipiscing.",
      skills: [
        "Career Advice",
        "How to improve",
        "Best Practices",
        "Avoid common mistakes",
      ],
      callToAction: { name: "CONTACT ME", link: "" },
    },
    {
      name: "Website for $1k",
      image: "../../images/1kwebpage.jpg",
      alt: "monitor showing a brand new site on the home page",
      description:
        "Lorem ipsum dolor sit amet consecte adipiscing elit iaculis. Lorem ipsum dolor sit amet consectetur adipiscing.",
      skills: [
        "Mobile First",
        "Advanced Functionality",
        "Professional Functions",
        "Design Elements",
      ],
      callToAction: { name: "GET IT", link: "" },
    },
  ];

  return (
    <section className="space-y-8 md:space-y-10">
      <h1 className="text-4xl md:text-5xl">Services</h1>
      <p>
        I'm always interested in collaborating on ambitious projects, helping
        other developers, and consulting with tech companies and startups.
      </p>
      <div className="space-y-20">
        {services.map((service, key) => (
          <div className="space-y-8 md:space-y-10">
            <h1 className="text-4xl md:text-5xl">{service.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* <GatsbyImage
              image={service.image}
              alt={service.alt}
              layout="fullWidth"
            /> */}
              <StaticImage
                src="../../images/coding.png"
                alt="A photo of Jay"
                layout="fullWidth"
              />
              <div className="space-y-8">
                <p>{service.description}</p>
                <div className="grid grid-cols-2 gap-6">
                  {service.skills.map((skill, key) => (
                    <Skill name={skill} key={key} />
                  ))}
                </div>
                <div className="text-center md:text-left">
                  <Button name="HIRE ME"></Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
