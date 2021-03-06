import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Menuitems from "../data/menu.json";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Icon } from '@iconify/react';

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Navbar sticky="top" bg="white" expand="lg" expanded={expanded} className="shadow-sm my-0 py-0">
        <Container fluid>
          <Navbar.Brand>
            <Link href="/">
              <a className="navbar-brand mx-5">
                <Image
                  className="logo"
                  src="/images/lavolottelogo.png"
                  width={75}
                  height={75}
                  layout="fixed"
                  alt="La Volotte"
                />
              </a>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setExpanded(expanded ? false : "expanded")}/>
          <Navbar.Collapse className="justify-content-end" id="navbarScroll">
            <Nav className="mx-5">
              <ul className="navbar-nav text-center">
                {Menuitems.menu.main.map((item, index) => (
                  <li className="nav-item fw-bold" key={index}> 
                      <Link href={item.URL}>
                        <a className="nav-link text-uppercase" onClick={() => setExpanded(false)}>{item.name}</a>
                      </Link> 
                  </li>
                ))}
 
                <li className="nav-item" >
                 <button className="mx-5 cart snipcart-summary snipcart-checkout text-dark ">
                 <Icon icon="ph:shopping-cart" />
                  <span className="badge badge-primary snipcart-items-count"></span>
                  <br />(<span className="snipcart-total-price"></span>)
                </button>
                </li>
 
              </ul> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
