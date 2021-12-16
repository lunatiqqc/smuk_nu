import { useState } from "react";

export default function About() {
    const [messageSent, setMessageSent] = useState(false);
    function handleMessageForm(e) {
        e.preventDefault();
        setMessageSent(true);
    }
    return (
        <main id="about">
            <article className="container">
                <h1>Om Os</h1>
                <div>
                    <section>
                        <div>
                            <h1>Vores Filosofi</h1>
                            <p>
                                Smuk.Nu ønsker at bidrage til at styrke
                                folkesundheden generelt blandt danskerne gennem
                                et langt større udvalg af sunde produkter og
                                tryg rådgivning af uddannede materialister og
                                farmakonomer. Samtidig har Smuk.Nu en ambition
                                om at give danskerne nem og sikker adgang til
                                digital sundhed og rådgivning gennem innovation.
                            </p>
                        </div>
                        <figure>
                            <img
                                src="/assets/AboutUs/OmOs-Profile.jpg"
                                alt="Relaxed person"
                            />
                        </figure>
                    </section>
                    <section>
                        <h1>Kontakt Os</h1>
                        <div>
                            <p>
                                Har du spørgsmål vedrørende en online ordre
                                eller til et produkt du har købt i Smuk.Nu, kan
                                du få hurtigt svar ved at benytte vores
                                kontaktformular eller skrive til
                                kundeservice@smuk.nu <br />
                                <br /> Eller kontakte kundeservice på tlf. 1234
                                5678. <br />
                                <br />
                                <span>Åbningstid på telefon:</span> <br />{" "}
                                Mandag - Torsdag fra kl. 8.00 - 18.00 <br />{" "}
                                Fredag fra kl. 9.00 - 18.00 <br />
                                Lørdag kl. 9-16
                            </p>

                            <form onSubmit={handleMessageForm} action="">
                                <input
                                    type="email"
                                    required
                                    placeholder="Email*"
                                />
                                <input
                                    type="text"
                                    id="message"
                                    required
                                    placeholder="Besked*"
                                />
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <button>Send Message</button>
                                    {messageSent ? (
                                        <p>Tak for din besked</p>
                                    ) : null}
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </article>
        </main>
    );
}
