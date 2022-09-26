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
            console.log(url, location);
            switch (url.hostname) {
              case 'static.hotjar.com': {
                return
                }
                case 'vars.hotjar.com': {
                return
                }
                case 'script.hotjar.com': {
                  return
                }
            }
          }
        }`,
      }}
    />,
  ]);
  setPostBodyComponents([<div id="portal" key="portal"></div>]);
};
