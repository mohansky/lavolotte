import ProductCard from './product-card'

export default function ProductList({ products }) {
  return (
    <>  
      <div className="row">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            slug={product.slug} 
            category={product.category}
            tags={product.tags}
            nadel={product.nadel}
            laenge={product.laenge}
            description={product.description}
            farben={product.farben}
            dprice={product.dprice}
            cprice={product.cprice}
            cpricetext={product.cpricetext}
            price={product.price}
            priceBefore={product.priceBefore}
            menge={product.menge}
            shortDescription={product.shortDescription}
            productID={product.productID}
            type={product.type}
            brand={product.brand}
            img={product.img}
          />
        ))}
      </div> 
    </ >
  )
}

