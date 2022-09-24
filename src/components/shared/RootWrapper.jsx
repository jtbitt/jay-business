import React from "react";
import { Script } from "gatsby";

export const RootWrapper = ({ children }) => {
  return (
    <>
      {/* <Script strategy="idle">
        {`(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3170670,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')`}
      </Script> */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-TQW41CM45E`}
        strategy="off-main-thread"
        forward={[`gtag`]}
      />
      <Script
        id="gtag-config"
        strategy="off-main-thread"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){ window.dataLayer.push(arguments);}
          gtag('js', new Date()); 
          gtag('config', 'G-TQW41CM45E', { send_page_view: false })`,
        }}
      />
      <div>{children}</div>
    </>
  );
};
