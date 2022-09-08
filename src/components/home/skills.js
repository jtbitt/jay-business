import * as React from "react";

import { Heading, Skill } from "@components";
import skills from "@content/skills.json";

export const Skills = () => {
  return (
    <section
      className="space-y-8 md:space-y-10 pt-36"
      id="skills"
      aria-label="skills"
    >
      <Heading type="h1">Skills</Heading>
      <div className="flex flex-col xl:flex-row gap-16">
        <div className="basis-full xl:basis-3/5 space-y-10 md:space-y-12">
          <Heading type="h6" basicFont="true" className="tracking-wider">
            Technical Skills
          </Heading>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6">
            {skills.technical.map((skill, key) => (
              <Skill name={skill} key={key} />
            ))}
          </div>
        </div>
        <div className="basis-full xl:basis-2/5 space-y-10 md:space-y-12">
          <Heading type="h6" basicFont="true" className="tracking-wider">
            Soft Skills
          </Heading>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 place-content-start gap-6">
            {skills.soft.map((skill, key) => (
              <Skill name={skill} key={key} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
