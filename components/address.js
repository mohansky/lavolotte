import React from "react";
import contact from "../data/contact.json";
import { Icon } from "@iconify/react";

export default function Address() {
  return (
    <>
      <h6 className="fs-4 mb-1"> {contact.title}</h6>
      <p>{contact.contactdetailstitle}</p>
      <ul className="list-unstyled mb-5">
        {contact.contactdetails.map((item, index) => (
          <li className="mb-3" key={index}>
            <p className="addy text-color">
              <a href={item.link}>
                <Icon
                  icon={item.icon}
                  className="text-accent pe-2"
                  width="40"
                />
                {item.name}
              </a>
            </p>
          </li>
        ))}
      </ul>
      <h6 className="fs-4 mb-1">{contact.socialtitle} </h6>
      <ul className="list-inline">
        {contact.social.map((item, index) => (
          <li className="list-inline-item social-icons me-3" key={index}>
            <a href={item.link} aria-label={item.name} >
              <Icon icon={item.icon} width="50" />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
