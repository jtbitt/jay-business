import * as React from "react";

import Skill from "../skill";

const Skills = () => {
  return (
    <section className="space-y-8 md:space-y-10">
      <h1 className="text-4xl md:text-5xl">Skills</h1>
      <div className="flex flex-col xl:flex-row gap-16">
        <div className="basis-full xl:basis-3/5 space-y-10 md:space-y-12">
          <h5 className="text-base md:text-lg">Technical Skills</h5>
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
        <div className="basis-full xl:basis-2/5 space-y-10 md:space-y-12">
          <h5 className="text-base md:text-lg">Soft Skills</h5>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 place-content-start gap-6">
            <Skill name={"Proactive"} />
            <Skill name={"Communication"} />
            <Skill name={"Problem Solving"} />
            <Skill name={"Time Management"} />
            <Skill name={"Adaptable"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
