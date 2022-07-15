import React from "react";

export default function ProductPrice({
  dprice,
  priceBefore,
  cprice,
  cpricetext,
}) {
  return (
    <>
      <div className="my-4">
        {dprice ? (
          <p className="mb-0">
            <span className="text-lv-secondary fs-4">
              {dprice} €
            </span>
          </p>
        ) : null}
        {priceBefore ? (
          <p className="mb-0">
            <span className="text-lv-secondary fs-3">
              <s>{priceBefore}</s>
            </span>
          </p>
        ) : null}
        {cprice ? (
          <p className="mb-0">
            <span className="text-lv-secondary fs-4">
              {cprice}
              <small className="ps-1"> {cpricetext} </small>
            </span>
          </p>
        ) : null}
        {dprice ? (
          <p className="fs-6">
            <small> inkl. MwSt. zzgl. Versandkosten* </small>
          </p>
        ) : null}
      </div>
    </>
  );
}
