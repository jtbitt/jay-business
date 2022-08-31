import * as React from "react";

export const Description = ({ className = "", children }) => {
  return (
    <p
      className={`text-base md:text-lg 2xl:text-xl font-light tracking-widest ${className}`}
    >
      {children}
    </p>
  );
};
