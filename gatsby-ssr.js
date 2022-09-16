import React from "react";

export const onRenderBody = ({ setHtmlAttributes, setPostBodyComponents }) => {
  setHtmlAttributes({ lang: "en" });
  setPostBodyComponents([<div id="portal" key="portal"></div>]);
};
