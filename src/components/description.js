import * as React from "react";

export const Description = ({ className = "", children }) => {
  return (
    <p
      className={`text-sm md:text-base font-light tracking-widest ${className}`}
    >
      {children}
    </p>
  );
};
