import React from "react";
import { Script } from "gatsby";

export const RootWrapper = ({ children }) => {
  return (
    <>
      <Script
        id="hotjar"
        src="./hotjar.js"
        strategy="off-main-thread"
        forward={[`hj`, `_hjSettings`]}
      >
        {`
          (function(h,o,t,j,a,r){
            window.hj=window.hj||function(){(window.hj.q=windows.hj.q||[]).push(arguments)};
            window._hjSettings={hjid:3170670,hjsv:6};
          })(window);
        `}
      </Script>
      <Script
        id="sentry"
        src="https://js.sentry-cdn.com/37a0156551a747eaa3ba96a5060c886e.min.js"
        crossOrigin="anonymous"
      ></Script>
      {children}
    </>
  );
};
