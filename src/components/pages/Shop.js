import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

    useEffect(async () => {
        window.addEventListener("click", handleWindowClick);
        const data = await fetch("https://smuknu.webexam-mcdm.dk/api/products");

        const json = await data.json();

        console.log(json);

        setProducts(json.reverse());
    }, []);

    return (
        <main id='shop'>
            {productDetails ? (
                <ProductDetails
                    imgSource={productDetails.imgSource}
                    title={productDetails.title}
                    price={productDetails.price}
                    description='All Purpose reparerende balsam er specielt udviklet til tørt 
                    og slidt hår. <br />
                    Balsammen indeholder cement-ceramid, som efterligner hårets 
                    egen cement og virker målrettet på de skadede områder for at 
                    opbygge og reparere håretreparere og styrke håroverfladen.
                    <br /> <br />
                    Håret genfinder sin smidighed og styrke. 
                    Håroverfladen bliver glat og glansfuld, og færre hårstrå knækker 
                    af.'
                />
            ) : null}{" "}
            <article className='container'>
                <h1 className='page-title'>Butik</h1>
                <div>
                    {products?.map((product, i) => {
                        if (i === 0) {
                            return (
                                <ProductCard
                                    onClick={handleProductCardClick}
                                    imgSource='/assets/Shop/Product01-Balm.jpg'
                                    title='All Purpose Balm'
                                    price='134,95'
                                />
                            );
                        } else {
                            return (
                                <Link to='/shop'>
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
