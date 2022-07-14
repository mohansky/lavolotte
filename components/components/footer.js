import Footerdata from "../data/footer.json";
import menulist from "../data/menu.json";
import Image from "next/image";
import Form from "../components/form";
import SectionSeparator from "../components/section-separator";
import Link from "next/link";
import Address from "./address";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <>
      <footer className="bg-accent-1 border-t border-accent-2 section pb-0">
        <div className="container">
          <div className="row pb-5 justify-content-between">
            <div className="col-12 text-center section-sm">
              <Link href="/">
                <a>
                  <Image
                    src={Footerdata.footer.logo}
                    className="img-fluid"
                    width={100}
                    height={100}
                    layout="fixed"
                    alt={Footerdata.footer.title}
                  />
                </a>
              </Link>
            </div>
            <div className="col-md-4 col-sm-6 ">
              <h6 className="fs-4 mb-4"> Rechtliches </h6>
              <ul className="list-unstyled mb-5">
                {menulist.menu.rechtliches.map((item, index) => (
                  <li key={index}>
                    <p>
                      <a className="text-color" href={item.URL}>
                        {item.name}
                      </a>
                    </p>
                  </li>
                ))}
              </ul>
              <h6 className="fs-4 mb-4"> Links </h6>
              <ul className="list-unstyled">
                {menulist.menu.main.map((item, index) => (
                  <li key={index}>
                    <p>
                      <a className="text-color" href={item.URL}>
                        {item.name}
                      </a>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-4 col-sm-6 mb-5">
              <h5 className="font-weight-medium mb-4">
                {Footerdata.footer.contactdetailstitle}
              </h5>
              <Address />
            </div>
            <div className="col-lg-4 col-md-5">
              <h5 className="font-weight-medium mb-4">Kontakt</h5>
              <Form />
            </div>
          </div>

          <SectionSeparator />
          <div className="d-md-flex text-center justify-content-between text-muted p-0 m-0">
            <p>
              {Footerdata.footer.title} © {new Date().getFullYear()}
            </p>
            <p>
              <a
                className="footer-link"
                href={Footerdata.footer.authorlink}
                target="_blank"
              >
                {Footerdata.footer.authortext}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
