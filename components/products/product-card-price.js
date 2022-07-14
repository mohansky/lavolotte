import React from "react";
import Link from "next/link";

export default function ProductCardPrice({ dprice, priceBefore }) {
  return (
    <>
      <div className="mb-4">
        <span className="lead text-primary font-weight-medium">{dprice} € </span>  
        <s className="lead text-primary ps-2">{priceBefore}</s>
        <br />
        <p className="fs-6">
        <small> inkl. MwSt. zzgl. Versandkosten* </small>
        </p>
      </div>
    </>
  );
}
