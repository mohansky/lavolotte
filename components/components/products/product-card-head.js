import React from "react";
import Link from "next/link";

export default function ProductCardHead({ slug, title, brand }) {
  return (
    <>
      <Link href={`/products/${slug}`}>
        <a>
          <h4 className="product-title">{title}</h4>
          <h6>{brand}</h6>
        </a>
      </Link>
    </>
  );
}
