import React from "react";

export default function ProductDescription({shortDescription}) {
  return (
    <>
    
      <h5>Kurzbeschreibung</h5>
      {shortDescription ? (
      <p>{shortDescription}</p>
      ) : null}
    </>
  );
}
