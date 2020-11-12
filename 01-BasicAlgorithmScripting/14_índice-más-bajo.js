/*
Scripting de algoritmo básico: ¿A dónde pertenezco?
Devuelve el índice más bajo en el que se debe insertar un valor (segundo argumento) en una matriz (primer argumento) una vez que se ha ordenado.
 El valor devuelto debe ser un número.

Por ejemplo, getIndexToIns([1,2,3,4], 1.5)debería regresar 1porque es mayor que 1(índice 0), pero menor que 2(índice 1).

Del mismo modo, getIndexToIns([20,3,5], 19)debería regresar 2porque una vez que se haya ordenado la matriz, 
se verá [3,5,20]y 19es menor que 20(índice 2) y mayor que 5(índice 1).
*/
function getIndexToIns(arr, num) {

    let newArray = arr.slice();
    //funcion de sort() para ordenar si no es letras
    newArray.sort(function(a, b) {
        return a - b;
    });
    for(let i = 0; i < newArray.length; i++) {
        if(newArray[i] >= num)
        return i;
    }
    return newArray.length;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));

function getIndexToIns(arr, num) {
    let result; 
    let newArray = arr.slice();
    newArray.push(num);
    newArray.sort(function(a, b) {
        return a - b;
    });
    result = newArray.indexOf(num);
    return result;
}
  
console.log(getIndexToIns([5, 3, 20, 3], 5));
  
  