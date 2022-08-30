import * as React from "react";

export const Description = ({ className = "", children }) => {
  return (
    <p
      className={`text-base md:text-lg font-light tracking-widest ${className}`}
    >
      {children}
    </p>
  );
};
