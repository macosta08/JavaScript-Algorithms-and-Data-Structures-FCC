/*
Secuencias de comandos de algoritmo intermedio:
 Unión ordenada
Escriba una función que tome dos o más matrices y devuelva una nueva matriz de valores únicos en el orden de las matrices proporcionadas originalmente.

En otras palabras, todos los valores presentes de todas las matrices deben incluirse en su orden original, pero sin duplicados en la matriz final.

Los números únicos deben ordenarse por su orden original, pero la matriz final no debe clasificarse en orden numérico.
*/
function uniteUnique(...arr) {
    let newArray = [];
    arr.flat().forEach(function(elem) {
        if (!newArray.includes(elem)) 
            newArray.push(elem);   
    });
    return newArray;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); 

//FCC

function uniteUnique(...arrays) {
    //make an array out of the given arrays and flatten it (using the spread operator)
    const flatArray = [].concat(...arrays);
  
    // create a Set which clears any duplicates since it's a regular set and not a multiset
    return [...new Set(flatArray)];
  }
///FCC
function uniteUnique(...arr) {
    return [...new Set(arr.flat())]
  }
  
  // Or as an arrow function
const uniteUnique = (...arr) => [...new Set(arr.flat())]
  