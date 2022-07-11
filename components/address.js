import React from "react";
import contact from "../data/contact.json";

export default function Address() {
  return (
    <>
      <h3 className="mb-1"> {contact.title}</h3>
      <p>{contact.contactdetailstitle}</p>
      <ul className="list-unstyled mb-5">
        {contact.contactdetails.map((item, index) => (
          <li className="mb-3" key={index}>
            <p className="addy text-color">
              <a href={item.link}>
                <i className={item.icon}> </i>
                {item.name}
              </a>
            </p>
          </li>
        ))}
      </ul>
      <h5>{contact.socialtitle} </h5>
      <ul className="list-inline">
        {contact.social.map((item, index) => (
          <li className="list-inline-item social-icons me-3" key={index}>
            <a href={item.link}>
              <i className={item.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
