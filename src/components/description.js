import * as React from "react";

const Description = ({ className, children }) => {
  return (
    <p
      className={`text-sm md:text-base font-light tracking-widest ${className}`}
    >
      {children}
    </p>
  );
};

export default Description;
