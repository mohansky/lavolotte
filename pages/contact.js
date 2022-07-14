import Head from "next/head";
import Address from "../components/address";
import Timings from "../components/timings";
import Form from "../components/form";

export default function Contact() {
  return (
    <>
      <Head>
        <title>La Volotte | Kontakt</title>
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
      </Head>
      <section className="section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <Address />
            </div>
            <div className="col-lg-4 col-sm-6">
              <Timings />
            </div>
            <div className="col-lg-5 ">
              <h3 className="mb-4">Kontakt</h3>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
