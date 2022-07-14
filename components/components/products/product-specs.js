import React from "react";
import Image from "next/image";

export default function ProductSpecs({ menge, nadel, laenge }) {
  return (
    <>
      <div className="my-3">
      {menge ? (
        <p className="mb-0">Gewicht: {menge}</p>
        ) : null}
        {nadel ? (
        <p className="mb-0">
          <Image
            src="/images/nadelstaerke.png"
            width={20}
            height={10}
            layout="fixed"
            alt={nadel}
          />
          <span className="ps-2">{nadel}</span>
        </p>
        ) : null}
        {laenge ? (
        <p className="mb-0">Lauflänge: {laenge}</p>
        ) : null}
      </div>
    </>
  );
}
