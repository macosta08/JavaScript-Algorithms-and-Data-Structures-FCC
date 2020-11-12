/*
Secuencias de comandos de algoritmos intermedios: 
todo sea verdad
Compruebe si el predicado (segundo argumento) es verdadero en todos los elementos de una colección (primer argumento).

En otras palabras, se le da una colección de matriz de objetos. El predicado preserá una propiedad de objeto y debe devolver truesi su valor es truthy. De lo contrario, regrese false.

En JavaScript, los truthyvalores son valores que se traducen truecuando se evalúan en un contexto booleano.

Recuerde, puede acceder a las propiedades del objeto mediante notación de puntos o []notación.
*/
function truthCheck(collection, pre) {
    
    return collection.every(elem => elem.hasOwnProperty(pre) && Boolean(elem[pre]));

     
}
console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat")); 

function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(obj => obj[pre]);
}
console.log(truthCheck([{"name": "Pete", "onBoat": false}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat")); 