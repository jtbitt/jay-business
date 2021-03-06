import * as React from "react";

const Button = ({ className, name }) => {
  return (
    <button
      className={`rounded h-9 w-36 md:h-12 md:w-40 bg-white ml-1 ${className}`}
    >
      <span className="h-full flex justify-center items-center border-2 rounded border-white -translate-x-1 -translate-y-1 text-white text-sm md:text-base font-medium tracking-widest bg-gray-500">
        {name}
      </span>
    </button>
  );
};

export default Button;
