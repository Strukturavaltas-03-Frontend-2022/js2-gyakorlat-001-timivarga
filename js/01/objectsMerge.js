/* 
A js/01/objectsMerge.js fájlban dolgozz.
Írj egy függvényt, amely paraméterként tetszőleges darabszámú objektumot merge-öl össze, majd visszatér ezzel az objektummal!
A függvény neve objectsMerge legyen! Az összefűzést úgy hajtsa végre, hogy az új objektum property-jei egyszerű indexek legyenek (0, 1, 2 stb.), amelyek tartalmazzák a részobjektumokat!
Pl.:
    // A két objektum:
    const johnDoe = { 
        firstName: 'John',
        lastName: 'Doe'
    };
    const janeDoe = { 
        firstName: 'Jane',
        lastName: 'Doe'
    }
    // A végeredmény:
    {
        0: { 
            firstName: 'John',
            lastName: 'Doe'
        },
        1:  { 
            firstName: 'Jane',
            lastName: 'Doe'
        }
    }
    
*/


// const johnDoe = { 
//     firstName: 'John',
//     lastName: 'Doe'
// };

// const janeDoe = { 
//     firstName: 'Jane',
//     lastName: 'Doe'
// }

//kiíratni:
// console.log(johnDoe,janeDoe);
//2db-ot:
// console.log({0: johnDoe, 1: janeDoe});

// https://stackoverflow.com/questions/4215737/convert-array-to-object
const objectsMerge = (...param) =>  Object.assign({}, param);
// const objectsMerge = (...param) =>  param.reduce((obj, value, index) => ({ ...obj, [index]: value }), {});

//objectsMerge(johnDoe, janeDoe);

export default objectsMerge;