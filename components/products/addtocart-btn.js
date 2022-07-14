import React from "react";

export default function AddtocartBtn({productID, price, slug, description, img, title, farben}) {
  return (
    <>
      {productID || price || slug || description || img || title || farben || farbimages ? (
      <button
        className="snipcart-add-item btn btn-outline-primary"
        id="my-button"
        data-item-id={productID}
        data-item-price={price}
        data-item-url={slug}
        data-item-description={description}
        data-item-image={img}
        data-item-name={title}
        data-item-custom1-name="Farbe"
        data-item-custom1-options={farben}
      >
        in den Warenkorb
      </button>
      ) : null}
    </>
  );
}



