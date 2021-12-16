import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import ProductDetails from "../ProductDetails";

export default function Shop() {
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
                <h1>Butik</h1>
                <div>
                    <ProductCard
                        onClick={handleProductCardClick}
                        imgSource="/assets/Shop/Product01-Balm.jpg"
                        title="All Purpose Balm"
                        price="134,95"
                    />
                    <ProductCard
                        imgSource="/assets/Shop/Product02-Bambooshampoo.jpg"
                        title="Bamboo Fibers Shampoo"
                        price="98,95"
                    />
                    <ProductCard
                        imgSource="/assets/Shop/Product03-Colorshampoo.jpg"
                        title="Color Protecting Shampoo"
                        price="215,65"
                    />
                    <ProductCard
                        imgSource="/assets/Shop/Product04-DailyConditinor.jpg"
                        title="Daily Balance Hair Conditioner"
                        price="222,50"
                    />
                    <ProductCard
                        imgSource="/assets/Shop/Product05-HerbalShampoo.jpg"
                        title="Herbal Nourishing Shampoo"
                        price="245,50"
                    />
                    <ProductCard
                        imgSource="/assets/Shop/Product06-EnergyWash.jpg"
                        title="Energy Body Wash"
                        price="165,95"
                    />
                    <ProductCard
                        imgSource="/assets/Shop/Product07-FacialOil.jpg"
                        title="Universal Facial Oil"
                        price="187,95"
                    />
                    <ProductCard
                        imgSource="/assets/Shop/Product08-OrganicToner.jpg"
                        title="Organic Flowers Deep Rich Toner"
                        price="265,50"
                    />
                </div>
            </article>
        </main>
    );
}
