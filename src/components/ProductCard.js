import { useState } from "react";

export default function ProductCard({
    imgSource,
    title,
    price,
    newPrice,
    onClick,
}) {
    const [showAddToCart, setShowAddToCart] = useState();
    function handleHover(e) {
        e.preventDefault();
        if (e.type === "mouseover") {
            setShowAddToCart(true);
        }
        if (e.type === "mouseleave") {
            setShowAddToCart(false);
        }
    }

    function handleAddToCart(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    return (
        <article
            style={{ cursor: onClick ? "pointer" : "" }}
            className="product-card"
            onClick={onClick?.bind({
                imgSource: imgSource,
                title: title,
                price: price,
            })}
            onMouseOver={handleHover}
            onMouseLeave={handleHover}
        >
            <figure style={{ position: "relative" }}>
                <img src={imgSource} alt={title} />
                {newPrice !== undefined ? (
                    <div className="special-offer">TILBUD</div>
                ) : null}
            </figure>
            <div>
                <h1>{title}</h1>
                <div>
                    <span className={newPrice ? "old-price" : null}>
                        {" "}
                        {price + " "}
                    </span>
                    {newPrice !== undefined ? (
                        <span className="new-price">{newPrice + " "}</span>
                    ) : null}
                </div>
            </div>
            <div>
                {showAddToCart ? (
                    <button onClick={handleAddToCart}>Læg i kurv</button>
                ) : null}
            </div>
        </article>
    );
}
