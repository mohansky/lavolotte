import React from "react";
import homepage from "../data/homepage.json";
import Image from "next/image"; 

export default function About() {
  return (
    <>
      <section className="section-sm">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 order-2">
              <p>{homepage.banner.content}</p>
              <p>{homepage.banner.content1}</p>
              <p>{homepage.banner.content2}</p>
            </div>
            <div className="col-lg-7 order-1 mb-4">
              <Image
                src={homepage.banner.image}
                width={720}
                height={405}
                layout="responsive"
                className="img-fluid"
                alt="La Volotte"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="row justify-content-around align-items-center">
            <div className="col-lg-4 mb-4">
              <Image
                src={homepage.about.image}
                width={720}
                height={720}
                layout="responsive"
                className="img-fluid"
                alt="La Volotte"
              />
            </div>
            <div className="col-lg-7">
              <p>{homepage.about.content}</p>
              <p>{homepage.about.content1}</p>
              <p>{homepage.about.content2}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
