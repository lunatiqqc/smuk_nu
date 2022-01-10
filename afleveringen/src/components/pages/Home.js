import CustomerReview from "../CustomerReview";
import ProductCard from "../ProductCard";
import { ReactComponent as Star } from "../../icons/star.svg";
import { ReactComponent as Leaf } from "../../icons/leaf.svg";
import { ReactComponent as Smiley } from "../../icons/smiley.svg";
import { ReactComponent as DeliveryTruck } from "../../icons/delivery-truck.svg";
import { ReactComponent as ThumbsUp } from "../../icons/thumbs-up.svg";
import { Link } from "react-router-dom";

export default function Home() {
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
                    <Link to='/'>
                        <ProductCard
                            imgSource='assets/Shop/Product12-SoftLibstick.jpg'
                            title="'Soft cream' læbestift"
                            price='122,95'
                        />
                    </Link>
                    <Link to='/'>
                        <ProductCard
                            imgSource='assets/Shop/Product11-Mascara.jpg'
                            title='forlængende vandafvisende mascara'
                            price='144,95'
                        />
                    </Link>
                    <Link to='/'>
                        <ProductCard
                            imgSource='assets/Shop/Product10-EyeShadow.jpg'
                            title="'Warm Tone' Øjenskygge Palette"
                            price='237,95'
                        />
                    </Link>
                    <Link to='/'>
                        <ProductCard
                            imgSource='assets/Shop/Product09-MultiConsealer.jpg'
                            title='Multi-Action Concealer'
                            price='199,95'
                            newPrice='149,95'
                        />
                    </Link>
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
