import Head from "next/head";

export default function Aktuelles() {
  return (
    <>
      <Head>
        <title>La Volotte | Aktuelles</title>
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
      </Head>
      <div className="container">
        <section className="section pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-sm-10 mb-5">
                <div className="content">
                  <p>
                    Vom 1.-4.Juni sind wir im Pfingsturlaub. Also noch schnell
                    heute oder morgen mit den schönen Sommergarnen eindecken! Am
                    8. Juni sind wir wieder da!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
