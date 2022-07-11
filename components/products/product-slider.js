import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function ProductSlider({ images }) {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '0',
    dotsClass: "slick-dots custom-thumbnail",
  };
  return (
    <>
    <div className="product-slider mb-5">
    {images ? (
      <Slider {...settings} 
        customPaging={(i)=> {
          return (
           <div className="slick-slide-thumb">
             <Image src={images[i]} layout="fill" alt="Product image"/>
            </div>
          );
        }}>
        {images.map((item, index) => (
          <div data-image={item} className="img-fluid slick-slide" key={index}>
            <Image
              className="slick-slide-image"
              src={item}
              width={360}
              height={360}
              layout="responsive"
              alt="Product image"
            />
           </div>
        ))}
      </Slider>
      ) : null}
      </div>
    </>
  );
}
