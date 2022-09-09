import * as React from "react";

export const Skill = ({ name, className = "" }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center box-border rounded h-16 lg:h-20 bg-gray-500/70 px-5">
      <div className="text-white text-md lg:text-lg font-bold tracking-wider">
        {name}
      </div>
    </div>
  );
};
