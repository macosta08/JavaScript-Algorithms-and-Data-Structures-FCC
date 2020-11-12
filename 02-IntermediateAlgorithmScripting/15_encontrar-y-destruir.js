/*
Secuencias de comandos de algoritmo intermedio: 
suéltelo
Dada la matriz arr, iterar y eliminar cada elemento comenzando desde el primer elemento (el índice 0) hasta que la función funcregrese truecuando el elemento iterado pasa a través de ella.

Luego, devuelva el resto de la matriz una vez que se cumpla la condición; de lo contrario, arrdebe devolverse como una matriz vacía.
*/
function dropElements(arr, func) {
    
    return arr = arr.some(func) == false ? [] : arr.slice(arr.findIndex(func), arr.length);
}
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));  
  