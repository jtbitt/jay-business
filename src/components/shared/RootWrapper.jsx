import React from "react";
import { Script } from "gatsby";

export const RootWrapper = ({ children }) => {
  return (
    <>
      <Script
        id="sentry"
        src="https://js.sentry-cdn.com/37a0156551a747eaa3ba96a5060c886e.min.js"
        crossOrigin="anonymous"
      ></Script>
      <Script
        id="plausible"
        data-domain="jaybittner.com"
        src="https://plausible.io/js/plausible.js"
        crossOrigin="anonymous"
      ></Script>
      {/* <Script id="hotjar-init" strategy="off-main-thread">
        {`
          window.hj=window.hj||function(){(window.hj.q=window.hj.q||[]).push(arguments)};
          window._hjSettings={hjid:3170670,hjsv:6};
        `}
      </Script>
      <Script
        id="hotjar"
        src="https://static.hotjar.com/c/hotjar-3170670.js?sv=6"
        strategy="off-main-thread"
        forward={[`hj`, `_hjSettings`]}
      ></Script> */}
      {children}
    </>
  );
};
