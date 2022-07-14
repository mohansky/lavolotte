import Image from "next/image"; 
import homepage from "../data/homepage.json";
import Slider from "react-slick";
import { Icon } from '@iconify/react';


function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="nextArrow"
      onClick={onClick}
      aria-label="next"
    > 
    <Icon icon="ph:arrow-right" width="40" /> 
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="prevArrow"
      onClick={onClick}
      aria-label="previous"
    >
      <Icon icon="ph:arrow-left" width="40" /> 
    </button>
  );
}

export default function Gallery() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }
        ]
      };
  return (
    < > 
    <section className="section">
    <div className="container">
      <div className="row">
          <h2 className="mb-5 text-center">{homepage.ladengallery.title}</h2>
        
      </div>
      <Slider {...settings} className="gallery-slider">  
        {homepage.ladengallery.gallItem.map((item, index) => (
          <div className="col-lg-4 px-5" key={index}>
            <Image
              src={item.image}
              width={480}
              height={640}
              layout="responsive"
              className="img-fluid"
              alt={item.name}
            />
          </div>
        ))}
        </Slider> 
    </div>
  </section>
  </ >
  )
}
