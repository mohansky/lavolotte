import React from "react";

export default function ProductBody({dprice, priceBefore, cprice, cpricetext, menge, nadel, laenge}) {
  return (
    <>
        <div className="my-4">
          <span className="lead text-primary font-weight-medium">
            {dprice} €
          </span>
          {/* &nbsp;  */}
          <s>{priceBefore} </s> 
          <br />
          <span className="lead text-primary font-weight-medium">
            {cprice} 
            <small>{cpricetext} </small>
          </span>
          <small> inkl. MwSt. zzgl. Versandkosten* </small>
          <p>
            Gewicht: {menge} 
            {/* &nbsp; &nbsp; <br /> */}
            <Image
              src="/images/nadelstaerke.png"
              width={20}
              height={10}
              layout="responsive"
              alt={nadel}
            />
            {/* &nbsp;{product.nadel} <br/> */}
            Lauflänge: {laenge} 
            {/* &nbsp; &nbsp; */}
          </p>
        </div>
    </>
  );
}
