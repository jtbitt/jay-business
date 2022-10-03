import React from "react";
import { RootWrapper } from "@components";

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>;
};

export const onRenderBody = ({
  setHtmlAttributes,
  setBodyAttributes,
  setPostBodyComponents,
}) => {
  setHtmlAttributes({
    lang: "en",
    className: "h-full w-full",
  });
  setBodyAttributes({
    className: "text-white h-full w-full bg-xs sm:bg-md xl:bg-lg",
  });
  setPostBodyComponents([<div id="portal" key="portal"></div>]);
};
