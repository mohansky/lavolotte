import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import Image from "next/image";

export default function FarbenSlider({ farbimages, farbimg, farbtitle }) {
  const options = {
    settings: {
      overlayColor: "rgb(0, 0, 0, 1)",
    },
    buttons: {
      showDownloadButton: false,
    },
    caption: {
      captionColor: "#fff",
      captionTextTransform: "capitalize",
      captionFontSize: "1rem",
    },
    thumbnails: {
      showThumbnails: false,
    },
  };
  return (
    <>
      <h1 className="font-weight-light text-center text-lg-left mt-4 mb-5">
        Farben
      </h1>
      {farbimages ? (
      <SRLWrapper options={options}>
        <ul className="gallery">
          {farbimages.map((farbimage, index) => {
            return (
              <li className="d-block mb-4" key={index}>
                <a href={farbimage.farbimg}>
                  <Image
                    className="img-fluid "
                    src={farbimage.farbimg}
                    alt={farbimage.farbtitle}
                    layout="intrinsic"
                    width="200"
                    height="200"
                  />
                  <h5 className="text-center">{farbimage.farbtitle} </h5>
                </a>
              </li>
            );
          })}
        </ul>
      </SRLWrapper>
      ) : null}
    </>
  );
}
