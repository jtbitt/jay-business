import * as React from "react";

export const Description = ({ size, className = "", children }) => {
  const fontSize = size ? size : "text-base md:text-lg 2xl:text-xl";

  return (
    <p
      className={`${className} ${fontSize} font-light tracking-widest`}
    >
      {children}
    </p>
  );
};
