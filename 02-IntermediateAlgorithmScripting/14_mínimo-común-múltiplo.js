/*
Secuencias de comandos de algoritmo intermedio:
 mínimo común múltiplo
Encuentre el múltiplo común más pequeño de los parámetros proporcionados que se pueda dividir uniformemente por ambos, 
así como por todos los números secuenciales en el rango entre estos parámetros.

El rango será una matriz de dos números que no necesariamente estarán en orden numérico.

Por ejemplo, si se le da 1 y 3, encuentre el múltiplo común más pequeño de 1 y 3 que también sea divisible por todos los números entre 1 y 3. 
La respuesta aquí sería 6.
*/
function smallestCommons(arr) {

    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let multiple = max;
  
    for(let i = max; i >= min; i--){
      if(multiple % i !== 0){
        multiple += max; 
        i = max;
      } 
    }
  
    return multiple;  
  }
  
console.log(smallestCommons([1,5])); 
