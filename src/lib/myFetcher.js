export default async function myFetcher(endpoint) {
    const data = await fetch("https://smuknu.webexam-mcdm.dk/api/" + endpoint);

    const json = await data.json();

    console.log(json);
    return json;
}
