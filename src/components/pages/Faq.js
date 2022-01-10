import { useEffect, useState } from "react";

export default function Fag() {
    const [faq, setFaq] = useState();

    useEffect(async () => {
        const data = await fetch("https://smuknu.webexam-mcdm.dk/api/faq");

        const json = await data.json();

        console.log(json);

        setFaq(json);
    }, []);
    function handleAccordionClick(e) {
        e.preventDefault();

        if (e.target.parentNode.open === true) {
            e.target.parentNode.open = false;
            return;
        }

        const detailsElements = document
            .querySelector("#accordion-container")
            .querySelectorAll("details");
        detailsElements.forEach((element) => (element.open = false));

        if (e.target.tagName.toLowerCase() === "details") {
            e.target.open = true;
        } else {
            e.target.parentNode.open = true;
        }
    }
    return (
        <main id='faq'>
            <article className='container'>
                <h1 className='page-title'>FAQ</h1>
                <div id='accordion-container' onClick={handleAccordionClick}>
                    {faq?.map((faq) => {
                        return (
                            <details>
                                <summary>{faq.question}</summary>
                                {faq.answer}
                            </details>
                        );
                    })}
                </div>
            </article>
        </main>
    );
}
