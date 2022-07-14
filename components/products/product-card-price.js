import React from "react";
import Link from "next/link";

export default function ProductCardPrice({ dprice, priceBefore }) {
  return (
    <>
      <div className="mb-4">
        <span className="text-lv-secondary fs-4">{dprice} € </span>  
        <s className="text-lv-secondary ps-2">{priceBefore}</s>
        <br />
        <p className="fs-6">
        <small> inkl. MwSt. zzgl. Versandkosten* </small>
        </p>
      </div>
    </>
  );
}
