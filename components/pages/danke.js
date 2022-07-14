import React from "react";
import Address from "../components/address";
import BtnBack from "../components/btn-back";
import Timings from "../components/timings";
import Head from "next/head";

export default function Danke() {
  return (
    <>
      <Head>
        <title>La Volotte | Danke</title>
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
      </Head>
    <div className="container">
      <BtnBack />
      <div className="row">
        <div className="col-lg-8 mx-auto mb-5">
          <h3 className="text-center mb-5">Danke für Ihre Nachricht.</h3>
          <h4 className="text-center mb-5">
            Für eine ausführliche Beratung schicken Sie gerne eine Mail oder
            rufen Sie zu den Öffnungszeiten (siehe Aktuelles) im Laden unter
            0241 / 47587794 an.
          </h4>
        </div>
      </div>

      <div className="col-lg-8 mx-auto  ">
        <div className="row">
          <div className="col-lg-4 mx-auto mb-5">
            <Address />
          </div>
          <div className="col-lg-4 mx-auto mb-5">
            <Timings />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
