import Document, { Html, Head, Main, NextScript } from "next/document";
import { CMS_NAME, EXAMPLE_PATH, HOME_OG_IMAGE_URL } from "../lib/constants";
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


          {/* General Meta */}
          <meta name="description" content={`Die bezaubernde, alte Ladentür öffnet sich zu 'La Volotte', und ein charmantes, kleines Geschäft mit einer großen Auswahl an ausgesuchten, hochwertigen Naturgarnen aus verschiedenen Ländern lädt die Kundschaft zum Schwelgen und Finden ein! | ${CMS_NAME}.`}/>
          <meta property="og:url" content={EXAMPLE_PATH} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={CMS_NAME}/>
          <meta
            property="og:description"
            content={`Die bezaubernde, alte Ladentür öffnet sich zu 'La Volotte', und ein charmantes, kleines Geschäft mit einer großen Auswahl an ausgesuchten, hochwertigen Naturgarnen aus verschiedenen Ländern lädt die Kundschaft zum Schwelgen und Finden ein! | ${CMS_NAME}.`}
          />
          <meta property="og:image:height" content="205"/>
          <meta property="og:image:width" content="300"/>
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
          <meta name="keywords" content="Wolle, LaVolotte, Aachen, atelier-zitron, bc-garn, isager, manos-del-uruguay, midara, mondial, schoppel, seehawer-siebert-naturfasern, the-fibre-company, franziska-uhl, erika-knight, polyamid, alpaka, bambus, baumwolle, bouretteseide, cashmere, hanf, leinen, maulbeerseide,schurwolle-gots, mohair, baumwolle-oeko, ramie, baumwolle-recycling, schurwolle, seide, tencel, tussahseide, viscose, yak, baumwolle-gots, baumwolle-kba"/>

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:title" content="La Volotte"/>
          <meta name="twitter:site" content={EXAMPLE_PATH} />
          <meta name="twitter:creator" content="@mogsishere" />  

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
