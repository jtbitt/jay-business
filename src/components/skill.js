import * as React from "react";

const Skill = ({ name }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center box-border rounded h-16 bg-gray-500/70 px-5">
      <div className="text-white text-md lg:text-lg font-bold tracking-wider">
        {name}
      </div>
    </div>
  );
};

export default Skill;
