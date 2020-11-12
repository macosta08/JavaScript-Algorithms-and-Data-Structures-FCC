/*
Escriba una función recursiva sum(arr, n), que devuelva la suma de los primeros nelementos de una matriz arr.
*/
function sum(arr, n) {
    let result = 0; 
    if (n <= 0) {
        return 0;
    } else {
        console.log(` ${n}`);
        result =  sum(arr, n - 1) + arr[n - 1];
        console.log(`funcion (${arr} y ${n -1}) +  ${arr[n - 1]}`);
        return result; 
    }
  }
console.log(sum([2, 3, 4, 5], 3));