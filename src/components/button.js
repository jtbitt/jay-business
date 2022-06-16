import * as React from "react";

const Button = ({ name }) => {
  return (
    <button className="box-border border-2 border-white rounded h-8 w-28 bg-gray-600">
      <span className="text-white text-sm font-medium tracking-wide">
        {name}
      </span>
    </button>
  );
};

export default Button;
