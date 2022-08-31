import * as React from "react";

export const Button = ({ className = "", name }) => {
  return (
    <button
      className={`rounded h-9 w-36 md:h-12 md:w-40 2xl:h-16 2xl:w-44 bg-white ml-1 mt-3 ${className}`}
    >
      <span className="h-full flex justify-center items-center border-2 rounded border-white -translate-x-1 -translate-y-1 text-white text-sm md:text-base 2xl:text-lg font-medium tracking-widest bg-gray-500">
        {name}
      </span>
    </button>
  );
};
