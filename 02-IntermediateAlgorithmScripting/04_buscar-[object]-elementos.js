/*
Secuencias de comandos de algoritmo intermedio:
 ¿Por qué estás
Cree una función que busque a través de una matriz de objetos (primer argumento) y devuelva una matriz de todos los objetos
que tienen pares de nombre y valor coincidentes (segundo argumento). Cada par de nombre y valor del objeto de origen debe
estar presente en el objeto de la colección si se va a incluir en la matriz devuelta.

Por ejemplo, si el primer argumento es [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
y el segundo argumento es { last: "Capulet" }, entonces debe devolver el tercer objeto de la matriz (el primer argumento), porque contiene el nombre
 y su valor, que se pasó como segundo argumento.
*/




function whatIsInAName(collection, source) {
    let arr = [];
    let propertySource = Object.keys(source);
  
    arr = collection.filter(elem => propertySource.every(prop => (elem.hasOwnProperty(prop) && elem[prop] === source[prop])));

    return arr; 
}
  
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })); 

function compareObject(a, b) {
    let resultTrue = 0; 
    let numProperty = Object.keys(b);
    let result;
    for (let propertyA in a) {
        for(let propertyB in b) {
            if(propertyA == propertyB  && a[propertyA] === b[propertyB]) {
                resultTrue += 1; 
            } 
        } 
    }
    result = resultTrue === numProperty.length ? true : false;
    return result;    
}
console.log(compareObject({ "apple": 1, "bat": 2, "cookie": 2 }, { "apple": 1, "cookie": 2 }));


function compareObject(elem, source) {
    return Object.keys(source).every(prop => (elem.hasOwnProperty(prop) && elem[prop] === source[prop]));    
}
console.log(compareObject({ "apple": 1, "bat": 2, "cookie": 2 }, { "apple": 1, "cookie": 2 }));
console.log(compareObject({ "bat": 2, "cookie": 2 }, { "apple": 1, "cookie": 2 }));


function whatIsInAName(collection, source) {

    function compareObject(a, b) {
        let resultTrue = 0; 
        let numProperty = Object.keys(b);
        let result;
        for (let propertyA in a) {
            for(let propertyB in b) {
                if(propertyA == propertyB  && a[propertyA] === b[propertyB]) {
                    resultTrue += 1; 
                } 
            } 
        }
        result = resultTrue === numProperty.length ? true : false;
        return result;    
    }
    
  
    
    return collection.filter(obj => compareObject(obj, source));
}
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));

function whatIsInAName(collection, source) {

    function compareObject(elem, source) {
        return Object.keys(source).every(prop => (elem.hasOwnProperty(prop) && elem[prop] === source[prop]));    
    }  
    
    return collection.filter(obj => compareObject(obj, source));
}
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));


