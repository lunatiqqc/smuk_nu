import CustomerReview from "../CustomerReview";
import ProductCard from "../ProductCard";
import { ReactComponent as Star } from "../../icons/star.svg";
import { ReactComponent as Leaf } from "../../icons/leaf.svg";
import { ReactComponent as Smiley } from "../../icons/smiley.svg";
import { ReactComponent as DeliveryTruck } from "../../icons/delivery-truck.svg";
import { ReactComponent as ThumbsUp } from "../../icons/thumbs-up.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
    const [products, setProducts] = useState();

    useEffect(async () => {
        const data = await fetch("https://smuknu.webexam-mcdm.dk/api/products");

        const json = await data.json();

        console.log(json);

        setProducts(json.reverse());
    }, []);

    return (
        <main id='home' className='container'>
            <article>
                <div>
                    <div>
                        <h1>SKØNHED FOR ALLE</h1>
                        <h2>Alt hvad du behøver... Noget du vil have.</h2>
                    </div>
                    <Link to='/shop'>
                        <button>Se vores top produkter</button>
                    </Link>
                </div>

                <figure>
                    <img
                        src='assets/Index/honest.jpg'
                        alt='skønheds produkter'
                    />
                </figure>
            </article>
            <section>
                <h1>Sæson velvære</h1>
                <div>
                    <Link to='/shop'>
                        <article>
                            <h1>Hårpleje</h1>
                            <figure>
                                <img
                                    src='assets/Index/Cleanser.jpg'
                                    alt='hårrenser '
                                />
                            </figure>
                        </article>
                    </Link>
                    <Link to='/shop'>
                        <article>
                            <h1>Krop og Bad</h1>
                            <figure>
                                <img
                                    src='assets/Index/bodyWash.jpg'
                                    alt='kropsrenser '
                                />
                            </figure>
                        </article>
                    </Link>
                    <Link to='/shop'>
                        <article>
                            <h1>Hudpleje</h1>
                            <figure>
                                <img src='assets/Index/soap.jpg' alt='sæbe ' />
                            </figure>
                        </article>
                    </Link>
                </div>
            </section>
            <section>
                <h1>Bedst sælgende</h1>
                <div>
                    {products?.map((product, i) => {
                        return i < 4 ? (
                            <Link key={i} to='/'>
                                <ProductCard
                                    imgSource={product.image}
                                    title={product.name}
                                    price={product.price}
                                />
                            </Link>
                        ) : null;
                    })}
                </div>
            </section>
            <section>
                <h1>Vores Kunder Siger</h1>
                <CustomerReview />
            </section>
            <section>
                <article>
                    <i>
                        <Leaf
                            className='svg-fill'
                            style={{ transform: "scale(0.88)" }}
                        />
                    </i>
                    <p>Kun sikre og sunde ingredienser</p>
                </article>
                <article>
                    <i>
                        <Smiley
                            className='svg-fill'
                            style={{ transform: "scale(0.85)" }}
                        />
                    </i>
                    <p>
                        Pro-age produkter for at understrege din naturlige
                        skønhed
                    </p>
                </article>
                <article>
                    <i>
                        <Star className='svg-stroke' />
                    </i>
                    <p>Godkendt af 10.000+ glade kunde</p>
                </article>
                <article>
                    <i>
                        <ThumbsUp
                            className='svg-stroke'
                            style={{ transform: "scale(0.88)" }}
                        />
                    </i>
                    <p>100% tilfredshedsgaranti</p>
                </article>
                <article>
                    <i>
                        <DeliveryTruck className='svg-stroke' />
                    </i>
                    <p>LiveTracking af din forsendelse</p>
                </article>
            </section>
        </main>
    );
}
