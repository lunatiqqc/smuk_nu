export default function ProductDetails({
    imgSource,
    title,
    price,
    description,
}) {
    return (
        <div id='product-details-wrapper'>
            <article
                id='product-details'
                onClick={(e) => {
                    e.preventDefault();

                    e.stopPropagation();
                }}
            >
                <figure>
                    <img src={imgSource} alt={title} />
                </figure>
                <div>
                    <h1>{title}</h1>
                    <h2>{price} KR.</h2>
                    <p dangerouslySetInnerHTML={{ __html: description }} />{" "}
                    <p />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        LÆG I KURV
                    </button>
                </div>
            </article>
        </div>
    );
}
