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
      {/* <Script
        id="hotjar-init"
        strategy="off-main-thread"
        forward={[`hj`, `_hjSettings`]}
      >
        {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3170670,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script> */}
      {/* <Script
        id="hotjar"
        src="https://static.hotjar.com/c/hotjar-3170670.js?sv=6"
        strategy="off-main-thread"
        forward={[`hj`, `_hjSettings`]}
      ></Script> */}
      {children}
    </>
  );
};
