import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import myFetcher from "../../lib/myFetcher";
import ProductCard from "../ProductCard";
import ProductDetails from "../ProductDetails";

export default function Shop() {
    const [products, setProducts] = useState();

    const [productDetails, setProductDetails] = useState();
    function handleProductCardClick(e) {
        e.preventDefault();
        e.stopPropagation();
        setProductDetails(this);
    }

    function handleWindowClick(e) {
        e.preventDefault();

        setProductDetails();
    }

    useEffect(() => {
        window.addEventListener("click", handleWindowClick);

        (async () => {
            setProducts(await myFetcher("products"));
        })();
        return () => {
            window.removeEventListener("click", handleWindowClick);
        };
    }, []);

    return (
        <main id="shop">
            {productDetails ? (
                <ProductDetails
                    imgSource={productDetails.imgSource}
                    title={productDetails.title}
                    price={productDetails.price}
                    description="All Purpose reparerende balsam er specielt udviklet til tørt 
                    og slidt hår. <br />
                    Balsammen indeholder cement-ceramid, som efterligner hårets 
                    egen cement og virker målrettet på de skadede områder for at 
                    opbygge og reparere håretreparere og styrke håroverfladen.
                    <br /> <br />
                    Håret genfinder sin smidighed og styrke. 
                    Håroverfladen bliver glat og glansfuld, og færre hårstrå knækker 
                    af."
                />
            ) : null}{" "}
            <article className="container">
                <h1 className="page-title">Butik</h1>
                <div>
                    {products?.map((product, i) => {
                        if (i === 0) {
                            return (
                                <ProductCard
                                    key={i}
                                    onClick={handleProductCardClick}
                                    imgSource={product.image}
                                    title={product.name}
                                    price={product.price}
                                />
                            );
                        } else {
                            return (
                                <Link key={i} to="/shop">
                                    <ProductCard
                                        imgSource={product.image}
                                        title={product.name}
                                        price={product.price}
                                    />
                                </Link>
                            );
                        }
                    })}
                </div>
            </article>
        </main>
    );
}
