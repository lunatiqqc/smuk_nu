export default function Fag() {
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
                    <details>
                        {" "}
                        <summary>Hvorfor dannes pigmentering?</summary>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Hic omnis alias ipsam?
                        <br />
                        Quisquam eligendi itaque et vitae quasi. Alias unde
                        veritatis ratione minus commodi.
                        <br />
                        Aliquam numquam accusamus voluptates quae eius quos
                        recusandae natus consequuntur eligendi non?
                        <br />
                        Cupiditate deleniti ducimus nisi rerum qui impedit
                        voluptate doloribus corrupti recusandae culpa!
                        <br />
                        Saepe provident molestiae animi officia quidem sapiente
                        enim, ut iure impedit quisquam?
                        <br />
                    </details>
                    <details>
                        <summary>Glycerin, som dagens helt?</summary>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus, totam.
                        <br />
                        Repellendus quos neque quisquam, hic facere facilis unde
                        laudantium voluptatibus.
                        <br />
                        Perferendis deleniti dolorem minus inventore quia sit
                        amet praesentium nesciunt!
                        <br />
                        Temporibus vitae aspernatur corrupti ut, suscipit illo
                        dolores molestiae sapiente!
                        <br />
                        Maxime, dolor unde consectetur voluptatum id quaerat
                        quidem nesciunt pariatur.
                        <br />
                    </details>
                    <details>
                        <summary>Hvorfor får man skæl?</summary>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        At.
                        <br />
                        Ipsum praesentium, neque nam odit necessitatibus quas
                        sapiente eos!
                        <br />
                        Aspernatur esse incidunt impedit voluptas odio
                        distinctio facere quos!
                        <br />
                        Itaque esse eaque similique numquam nemo natus
                        repellendus provident?
                        <br />
                        Blanditiis maiores fugiat, suscipit consequuntur
                        corrupti hic esse magnam.
                        <br />
                        Incidunt pariatur esse dolores distinctio nihil sed
                        temporibus totam?
                        <br />
                    </details>
                </div>
            </article>
        </main>
    );
}
