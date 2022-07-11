import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCardImage({ slug, title, img }) {
  return (
    <>
      <Link href={`/products/${slug}`}>
        <a>
          <Image
            src={img}
            width={240}
            height={240}
            layout="responsive"
            alt={title}
            className="card-img-top"
          />
        </a>
      </Link>
    </>
  );
}
