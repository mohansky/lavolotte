import Link from "next/link";
import Image from "next/image";
import AddtocartBtn from "./addtocart-btn";
import ProductCardHead from "./product-card-head";
import ProductCardSpecs from "./product-card-specs";
import ProductCardPrice from "./product-card-price";
import ProductCardImage from "./product-card-image";

export default function ProductCard({
  title,
  slug,
  nadel,
  description,
  farben,
  dprice,
  price,
  priceBefore,
  menge,
  productID,
  brand,
  img,
}) {
  return (
    <>
      <div id="products" className="col-md-6 col-lg-4 col-xl-3 product-item">
        <div className="card border-0 text-center mb-100 ">
      <ProductCardImage slug={slug} title={title} img={img} /> 
          <div className="card-body">
            <ProductCardHead slug={slug} title={title} brand={brand} />
            <ProductCardSpecs description={description} menge={menge} nadel={nadel} />
            <ProductCardPrice dprice={dprice} priceBefore={priceBefore} />
            <AddtocartBtn
              productID={productID}
              price={price}
              slug={slug}
              description={description}
              img={img}
              title={title}
              farben={farben}
            />
          </div>
        </div>
      </div>
    </>
  );
}
