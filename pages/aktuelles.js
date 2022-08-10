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
                  Liebe Kundinnen! <br/>
                  Vom 10. August bis einschließlich 31. August machen wir Sommerpause! Wer noch schnell was braucht, kann gerne morgen, am 6. August von 11-15 Uhr kommen! Allen eine gute Zeit, ein schönes Strickzeug in der Hand und für den Herbst viele neue Ideen! 
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
