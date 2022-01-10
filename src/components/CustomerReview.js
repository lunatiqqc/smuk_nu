import { useEffect, useState } from "react";

export default function CustomerReview() {
    const [reviews, setReviews] = useState();

    useEffect(async () => {
        const data = await fetch("https://smuknu.webexam-mcdm.dk/api/reviews");

        const json = await data.json();

        console.log(json);

        setReviews(json);
    }, []);
    return (
        <>
            <div className='customer-review'>
                {reviews?.map((review, i) => {
                    return (
                        <article key={i}>
                            <figure>
                                <img
                                    src={review.image}
                                    alt={review["customer-name"]}
                                />
                            </figure>
                            <div>
                                <p>{review["customer-txt"]}</p>
                                <h1>{review["customer-name"]}</h1>
                                <h2>Kunde</h2>
                            </div>
                        </article>
                    );
                })}
            </div>
        </>
    );
}
