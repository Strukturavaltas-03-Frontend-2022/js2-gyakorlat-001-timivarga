/* A js/02/taggedTemplate.js fájlban dolgozz!
Írj egy olyan függvényt (tagged template), amely a paraméterként kapott texts, values értékeket úgy adja vissza egy string-ben, hogy a text
értékek dőltek, a value-k félkövérek legyenek, ha beillesztjük a HTML-be, tehát a megfelelő tagekkel kiegészített string-et adjon vissza!
Például ebből, hogy James, ez legyen: <strong>James</strong>.
A függvény neve taggedTemplate legyen!
Összefoglalva: a kapott String-eket kell HTML-elemekké (tagekké) alakítani. */



//  const user = {
//     firstName: 'James',
//     lastName: 'Boyd',
//     work: 'BME'
// };

// '<strong>James Boyd</strong> <italic>works at</italic> <strong>BME</strong>.' 

const taggedTemplate = (texts, ...values) =>
    texts.map((text, index) =>
        `${text != ' ' ? `<em>${text}</em>` : ' '}
         ${values[index] ? `<strong>${values[index]}</strong>` : ''}`
    ).join('');

export default taggedTemplate;

    //  const template = tag`${user.firstName} ${user.lastName} works at ${user.work}.`;
    //  document.body.innerHTML = template;