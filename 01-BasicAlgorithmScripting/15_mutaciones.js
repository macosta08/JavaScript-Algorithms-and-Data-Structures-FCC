/*
Scripting de algoritmo básico: 
mutaciones
Devuelve verdadero si la cadena del primer elemento de la matriz contiene todas las letras de la cadena del segundo elemento de la matriz.

Por ejemplo, ["hello", "Hello"]debe devolver verdadero porque todas las letras de la segunda cadena están presentes en la primera, ignorando el caso.

Los argumentos ["hello", "hey"]deben devolver falso porque la cadena "hola" no contiene una "y".

Por último, ["Alien", "line"]debe devolver verdadero porque todas las letras en "línea" están presentes en "Alien".
*/

function mutation(arr) {
    
    let arr1 = arr[1].toLowerCase();
    let arr2 = arr[0].toLowerCase();
    
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) < 0) 
      return false;
    }
    return true;
}

console.log(mutation(["Mary", "Aarmy"]))