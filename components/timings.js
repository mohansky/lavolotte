import React from "react";
import contact from "../data/contact.json";

export default function Timings() {
  return (
    <>
      <h3 className="mb-4">{contact.opennigHour.title}</h3>
      <ul className="list-unstyled">
        {contact.opennigHour.dayTimeList.map((item, index) => (
          <li className="mb-3" key={index}>
            <p> {item.dayTime} </p>
          </li>
        ))}
      </ul>
    </>
  );
}
