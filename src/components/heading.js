import * as React from "react";

const elements = {
  h1: { name: "h1", size: "text-4xl md:text-5.5xl 2xl:text-7xl" },
  h2: { name: "h2", size: "text-3xl md:text-4xl 2xl:text-5xl" },
  h3: { name: "h3", size: "text-2xl md:text-3xl 2xl:text-4xl" },
  h4: { name: "h4", size: "text-xl md:text-2xl 2xl:text-3xl" },
  h5: { name: "h5", size: "text-lg md:text-xl 2xl:text-2xl" },
  h6: { name: "h6", size: "text-base md:text-lg 2xl:text-xl" },
};

export const Heading = ({ type, basicFont, className = "", children }) => {
  const Header = `${elements[type].name}`;
  const size = elements[type].size;
  const font = basicFont ? "font-sans" : "font-pt-sans";

  return (
    <Header className={`${size} ${font} font-bold tracking-wide ${className}`}>
      {children}
    </Header>
  );
};
