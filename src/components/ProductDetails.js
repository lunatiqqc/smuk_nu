export default function ProductDetails({
    imgSource,
    title,
    price,
    description,
}) {
    function getDocumentFullHeight() {
        var body = document.body,
            html = document.documentElement;

        var height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );

        return height;
    }
    return (
        <div id="product-details-wrapper">
            <article
                id="product-details"
                onClick={(e) => {
                    e.preventDefault();
                    console.log("product-details clicked");
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
                            console.log("button CLicked");
                            e.stopPropagation();
                        }}
                    >
                        LÆG I KURV
                    </button>
                </div>
            </article>
        </div>
    );
}
