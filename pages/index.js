import { getAllPosts, getAllProducts } from "../lib/api";
import Head from "next/head";
import homepage from "../data/homepage.json";
import Gallery from "../components/gallery";
import About from "../components/about";
import ProductList from "../components/products/product-list"; 

export default function Index({ allProducts }) {
  const n = 8;
  const randomProducts = allProducts
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((a) => a.x)
    .slice(0, n);

  return (
    <>
      <Head>
        <title>La Volotte</title>
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
      </Head>
      <About />
      <Gallery homepage={homepage} />
      <section className="section pb-0">
        <div className="container">
          <h2 className=" text-center mb-5">{homepage.products.title} </h2>
          <ProductList products={randomProducts} />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);
  const allProducts = getAllProducts([
    "title",
    "slug",
    "content",
    "draft",
    "category",
    "tags",
    "nadel",
    "laenge",
    "description",
    "farben",
    "dprice",
    "cprice",
    "cpricetext",
    "price",
    "priceBefore",
    "menge",
    "shortDescription",
    "productID",
    "type",
    "brand",
    "img",
    "images",
  ]);

  return {
    props: { allPosts },
    props: { allProducts },
  };
}
