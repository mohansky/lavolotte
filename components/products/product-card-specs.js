import React from "react";
import Image from "next/image";

export default function ProductCardSpecs({ description, menge, nadel }) {
  return (
    <>
      <p className="product-description">{description}</p>
      <p> 
        {menge}  
        <span className="mx-2">
          <Image
            src="/images/nadelstaerke.png"
            className="card-img-top"
            alt={nadel}
            width={20}
            height={10}
          />
        </span> 
        {nadel}  
      </p>
    </>
  );
}
