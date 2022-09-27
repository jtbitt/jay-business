import React from "react";
import { RootWrapper } from "@components";

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>;
};

export const onRenderBody = ({
  setHtmlAttributes,
  setHeadComponents,
  setPostBodyComponents,
}) => {
  setHtmlAttributes({ lang: "en" });
  setHeadComponents([
    <script
      key="partytown-vanilla-config"
      dangerouslySetInnerHTML={{
        __html: `partytown = {
          resolveUrl(url, location) {
            switch (url.hostname) {
              case 'vars.hotjar.com': {
                return new URL(location.origin + '/__third-party-proxy?url=https://vars.hotjar.com/box-69edcc3187336f9b0a3fbb4c73be9fe6.html');
              }
              case 'script.hotjar.com': {
                return new URL(location.origin + '/__third-party-proxy?url=https://script.hotjar.com/modules.01a02f6e8b126e8c8358.js');
              }
            }
          }
        }`,
      }}
    />,
  ]);
  setPostBodyComponents([<div id="portal" key="portal"></div>]);
};
