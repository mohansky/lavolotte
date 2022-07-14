import Document, { Html, Head, Main, NextScript } from "next/document";
import { GTM_ID } from "../lib/gtm";
import Script from "next/script";
// import * as klaroConfig from '../klaro'
 

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <Script
            strategy="afterInteractive" dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');`,}}/> */}

          {/* <script defer type="text/javascript" src="../klaro.js" data-config="klaroConfig"/>  
          <script defer type="text/javascript" src="https://cdn.kiprotect.com/klaro/0.7/klaro.js"/>
          <link rel="stylesheet" href="https://cdn.kiprotect.com/klaro/0.7/klaro.min.css" /> */}

           <link rel="preconnect" href="https://app.snipcart.com" /> 
           <link rel="preconnect" href="https://cdn.snipcart.com" />
           <link rel="stylesheet" strategy="afterInteractive" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />

          {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/> */}
          <link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"/> 
        </Head>
        {/* <!-- Google Tag Manager (noscript) --> */}
        {/* <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript> */}
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <body>
        {/* <div id="klaro"></div> */}
          <Main />
          <NextScript />
        </body>
        <script async strategy="afterInteractive" src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"/>
        <div id="snipcart" loadstrategy="on-user-interaction" data-config-modal-style="side" data-api-key={`${process.env.SNIPCART_KEY}`} hidden >
        </div>
      </Html>
    );
  }
}
