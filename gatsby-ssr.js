import React from "react";
import { RootWrapper } from "@components";

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>;
};

export const onRenderBody = ({ setHtmlAttributes, setPostBodyComponents }) => {
  setHtmlAttributes({
    lang: "en",
  });
  setPostBodyComponents([<div id="portal" key="portal"></div>]);
};
