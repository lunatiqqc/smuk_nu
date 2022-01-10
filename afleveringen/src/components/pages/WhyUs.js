import CustomerReview from "../CustomerReview";

export default function WhyUs() {
    return (
        <main id='why-buy-from-us'>
            <article className='container'>
                <h1 className='page-title'>Hvorfor Købe Hos Os</h1>
                <div>
                    <section>
                        <figure>
                            <img
                                src='/assets/BuyFromUs/AboutUs-Shadow.jpg'
                                alt='shadow makeup'
                            />
                        </figure>
                        <div>
                            <h1>Bedste Kvalitet</h1>
                            <p>
                                Mange makeuptrends starter hos makeupartisterne
                                – naturligvis, og det gælder i særdeleshed også
                                makeupartisternes vidundermiddel bananpudder.{" "}
                                <br />
                                <br />
                                Men hvad er bananpudder for en størrelse? Hvilke
                                mirakler gør det for din hud? <br />
                                <br /> Og hvad har Ole Henriksen med bananpudder
                                at gøre? Kontakt os og bliv klogere – og glæd
                                dig til at få opskriften på en hud med masser af
                                glød og en fejlfri finish.
                            </p>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h1>Professionel rådgivning</h1>
                            <p>
                                For at kunne give dig den bedste rådgivning til
                                dit hår, har Smuk.Nu et helt team af
                                professionelle stylister og frisører klar til at
                                hjælpe dig. <br />
                                <br />
                                Alle vores frisører har mange års erfaring fra
                                frisørsaloner. De kan derfor give dig den samme
                                professionelle rådgivning, som du får hos
                                frisøren. Uanset om det gælder valget af de helt
                                rigtige produkter til dit hår, eller hvordan du
                                anvender produkterne korrekt, så spørg os, og få
                                det bedste ud af dine køb.
                            </p>
                        </div>
                        <figure>
                            <img
                                src='/assets/BuyFromUs/AboutUs-Collection.jpg'
                                alt='Collection of makeup'
                            />
                        </figure>
                    </section>
                </div>
                <section>
                    <h1>Vores Kunder Siger</h1>
                    <CustomerReview />
                </section>
            </article>
        </main>
    );
}
