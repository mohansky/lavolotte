import Head from "next/head";
import Form from "../components/form";
import Accordian from "../components/accordian";

export default function FAQ() {
  return (
    <>
      <Head>
        <title>La Volotte | FAQ</title>
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
      </Head>
      <div className="container">
        <section className="section pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 ">
                <h4 className="mb-4"> Häufig gestellte Fragen </h4>
                <Accordian />
              </div>
              <div className="col-lg-5 offset-lg-1">
                <h4 className="mb-4">Bitte nehmen Sie Kontakt mit uns auf.</h4>
                <Form />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
