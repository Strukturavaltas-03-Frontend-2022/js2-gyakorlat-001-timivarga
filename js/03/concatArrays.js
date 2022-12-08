/* A js/03/concatArrays.js fájlban dolgozz!
Írj egy függvényt, amely első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb, amelyek string-eket tartalmaznak!
A függvény neve concatArrays legyen!
A függvény:
összefűzi egy tömbbe az összes elemet,
eltávolítja az ismétlődő elemeket,
eltávolítja az összes olyan string-et, amely tartalmazza az első paraméterként megadott karaktert,
eltávolítja a string-ek végén lévő whitespace karaktert,
visszaadja ezt az új tömböt. */


function concatArrays(character, ...param) {
    let tomb = [...param].flat() //összefűzi egy tömbbe az összes elemet
    .filter((value, index, self) => self.indexOf(value) === index) // eltávolítja az ismétlődő elemeket,   https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
    .filter((value) => !value.includes(character))  //eltávolítja az összes olyan string-et, amely tartalmazza az első paraméterként megadott karaktert,
    .map(value => value.trimEnd()); // eltávolítja a string-ek végén lévő whitespace karaktert,
    return tomb;
}

export default concatArrays;



/* Alakítsd át úgy az előző feladatot, hogy ne egy függvényed legyen, hanem minden egyes részfeladat legyen külön függvénybe szervezve, tehát:
1.függvény: első paraméterként egy karaktert kap, a többi paraméter pedig tetszőleges számú tömb, amelyek string-eket tartalmaznak! A függvény összefűzi egy tömbbe az összes elemet, és visszaadja ezt az új tömböt
2.függvény: egy paraméterként kapott tömbből eltávolítja az ismétlődő elemeket, és visszaadja az új tömböt
3.függvény: egy paraméterként kapott tömb összes elemének elejéről és végéről levágja a space karaktereket, visszaad egy új tömböt
Egyik függvénynél se módosítsd a paraméterként kapott tömböt. Mindig újat hozz létre! Tartsd szem előtt, hogy egy függvény csak egy dolgot csináljon! */


function concatFlatArrays(character, ...param) {
    let tomb = [...param].flat(); //összefűzi egy tömbbe az összes elemet
    return tomb;
}

function uniqueElements(array) {
   return array.filter((value, index, self) => self.indexOf(value) === index); // eltávolítja az ismétlődő elemeket,   https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
}

function removeSpace (array) {
    return array.map(value => value.trimEnd()).map(value => value.trimStart()); // eltávolítja a string-ek elején és végén lévő whitespace karaktert,
}

//removeSpace(uniqueElements(concatFlatArrays('r', ['robi', 'géza'], [' márton'], ['hammadata'])));