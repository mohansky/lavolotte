import { useRouter } from "next/router";
import { Tab, Tabs } from "react-bootstrap";
import { getProductBySlug, getAllProducts } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import ErrorPage from "next/error";
import Head from "next/head";
import ProductTitle from "../../components/products/product-title";
import Farbenhinweis from "../../components/products/farben-hinweis";
import BtnBack from "../../components/btn-back";
import Versandinfo from "../../components/products/versand-info";
import AddtocartBtn from "../../components/products/addtocart-btn";
import ProductDescription from "../../components/products/product-description";
import ProductSlider from "../../components/products/product-slider";
import ProductHead from "../../components/products/product-head";
import ProductPrice from "../../components/products/product-price";
import ProductSpecs from "../../components/products/product-specs";
import FarbenSlider from "../../components/products/farben-slider";

export default function Product({ product }) {
  const router = useRouter();
  if (!router.isFallback && !product?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div className="container">
      {router.isFallback ? (
        <ProductTitle>Loading…....</ProductTitle>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>
                {CMS_NAME} | {product.title}
              </title>
              {/* <link rel="shortcut icon" href="/favicons/favicon.ico" /> */}
              {/* <meta property="og:image" content={product.ogImage.url} /> */}
              <meta property="og:description" content={product.shortDescription}/>
              <meta property="og:image:height" content="205"/>
              <meta property="og:image:width" content="300"/>
              <meta property="og:image" content={product.img} />
              <meta name="keywords" content={`${product.brand}, ${product.tags}`}/>

            </Head>
            <BtnBack />
            <section className="section pt-0">
              <div className="container"> 
                <div className="row">
                  <div className="col-lg-5 mb-4 mb-lg-0">
                    <ProductSlider images={product.images} />
                  </div>

                  <div className="col-lg-5 offset-lg-1">
                    <ProductHead title={product.title} brand={product.brand} />

                    <div className="my-4">
                      <ProductPrice
                        dprice={product.dprice}
                        priceBefore={product.priceBefore}
                        cprice={product.cprice}
                        cpricetext={product.cpricetext}
                        />

                        <ProductSpecs menge={product.menge} nadel={product.nadel} laenge={product.laenge} />
                      </div>

                      <ProductDescription shortDescription={product.shortDescription} />
                      <AddtocartBtn
                        productID={product.productID}
                        price={product.price}
                        slug={product.slug}
                        description={product.description}
                        img={product.img}
                        title={product.title}
                        farben={product.farben}
                      />
                      <Versandinfo />
                    </div>

                    <div className="col-12 mt-5">
                      <Tabs defaultActiveKey="home" id="farben-tab" className="mb-3 border-bottom-0" >
                        <Tab eventKey="home" title="Hinweis zu farben auswahl">
                          <Farbenhinweis />
                        </Tab>
                        <Tab eventKey="farbauswahl" title="Farbauswahl">
                          <FarbenSlider farbimages={product.farbimages} />
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </div> 
            </section>
          </article>
        </>
      )}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const product = getProductBySlug(params.slug, [
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
    "farbimages",
    "farbimg",
    "farbtitle",
  ]);
  const content = await markdownToHtml(product.content || "");

  return {
    props: {
      product: {
        ...product,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const products = getAllProducts(["slug"]);

  return {
    paths: products.map((product) => {
      return {
        params: {
          slug: product.slug,
        },
      };
    }),
    fallback: false,
  };
}
