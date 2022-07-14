import React from "react";

export default function ProductHead({ title, brand }) {
  return (
    <>
      {title ? <h4 className="font-weight-medium">{title}</h4> : null}
      {brand ? <h6 className="font-weight-medium">{brand}</h6> : null}
    </>
  );
}
