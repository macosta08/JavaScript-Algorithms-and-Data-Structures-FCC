/*
Hemos definido una función llamada countdowncon un parámetro ( n). 
La función debe utilizar recursión para devolver una matriz que contiene los números enteros na través 1basado en el nparámetro.
 Si la función se llama con un número menor que 1, la función debería devolver una matriz vacía.
Por ejemplo, llamar a esta función con n = 5debería devolver la matriz [5, 4, 3, 2, 1]. 
Su función debe usar la recursividad llamándose a sí misma y no debe usar bucles de ningún tipo.
*/

function countdown(n){
    
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}
console.log(countdown(10));