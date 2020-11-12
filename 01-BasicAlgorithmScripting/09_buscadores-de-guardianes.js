/* 

Secuencias de comandos de algoritmos básicos:
 buscadores de guardianes
Cree una función que mire a través de una matriz arry devuelva el primer elemento que pasa una 'prueba de verdad'. 
Esto significa que dado un elemento x, la 'prueba de verdad' se pasa si func(x)es true. Si ningún elemento pasa la prueba, regrese undefined.
*/

function findElement(arr, func) {
    let num = 0;

    for(let i = 0; i < arr.length; i++) {
        num = arr[i]
        if(func(num)) 
            return arr[i] 
    }
    return undefined;
}
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));

function findElement(arr, func) {
  
   return arr.find(element => func(element));
}
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));