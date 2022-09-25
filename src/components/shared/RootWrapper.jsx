import React from "react";
import { Script } from "gatsby";

export const RootWrapper = ({ children }) => {
  return (
    <>
      <Script id="hotjar">
        {`(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3170670,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.defer=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')`}
      </Script>
      {/* <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`}
        strategy="off-main-thread"
        forward={[`dataLayer.push`]}
      />
      <Script id="gtag-config" strategy="off-main-thread" forward={[`gtag`]}>
        {`
          window.dataLayer = window.dataLayer || []
          window.gtag = function gtag() { window.dataLayer.push(arguments) }
          gtag('js', new Date())
          gtag('config', ${process.env.GTAG}, { page_path: location ? location.pathname + location.search + location.hash : undefined })
        `}
      </Script>
      <div>{children}</div> */}
    </>
  );
};
