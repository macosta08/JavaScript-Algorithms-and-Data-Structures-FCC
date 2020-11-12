/*
Secuencias de comandos de algoritmo básico: 

corte y empalme
Se le dan dos matrices y un índice.

Copie cada elemento de la primera matriz en la segunda matriz, en orden.

Empiece a insertar elementos en el índice nde la segunda matriz.

Devuelve la matriz resultante. Las matrices de entrada deben permanecer iguales después de que se ejecute la función. */

function frankenSplice(arr1, arr2, n) {
    let arr = arr2.slice();
    arr.splice(n, 0, arr1);

    return arr.flat(); // flat() aplana el array convirtiendolo en uno simple 
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));


function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));