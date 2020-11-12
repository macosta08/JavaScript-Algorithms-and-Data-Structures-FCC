/*
Secuencias de comandos de algoritmo intermedio:
 buscar y destruir
Se le proporcionará una matriz inicial (el primer argumento en la función destructora), seguida de uno o más argumentos. Elimine todos los elementos de la matriz inicial que tengan el mismo valor que estos argumentos.

Nota
Tienes que utilizar el argumentsobjeto.
*/
// function destroyer(arr) {

//     let args = [...arguments];    
//     args.forEach(elem => {         
          
//         while(arr.indexOf(elem) != -1){
            
//             arr.splice(arr.indexOf(elem), 1);
//         }   
//     })
//     return arr;

// }
//   console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
  
const destroyer = (arr, ...valsToRemove) => arr.filter(elem => !valsToRemove.includes(elem));

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))