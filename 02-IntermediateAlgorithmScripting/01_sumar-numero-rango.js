/* 
Scripting de algoritmo intermedio: 
sumar todos los números en un rango
Le pasaremos una matriz de dos números. Devuelve la suma de esos dos números más la suma de todos los números entre ellos. El número más bajo no siempre aparecerá primero.

Por ejemplo, sumAll([4,1])debería devolver 10porque la suma de todos los números entre 1 y 4 (ambos incluidos) es 10.
*/

function sumAll(arr) {
    let sum = 0;
        if(arr[0] < arr[1]) {
            for(let i = arr[0]; i <= arr[1]; i++) {
                sum +=  i;
            }
        } else if(arr[0] > arr[1]) {
            for(let i = arr[0]; i >= arr[1]; i--) {
                sum += i; 
            }
        }
    return sum;
  }
  console.log(sumAll([5, 10]));
  

  function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sum += i;
    }
    return sum;
  }
  
  sumAll([1, 4]);