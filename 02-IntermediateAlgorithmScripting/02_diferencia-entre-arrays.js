/*
Secuencias de comandos de algoritmo intermedio:
 diferencia de dos matrices
Compare dos matrices y devuelva una nueva matriz con los elementos que solo se encuentran en una de las dos matrices dadas, pero no en ambas. En otras palabras, devuelve la diferencia simétrica de las dos matrices.

Nota
Puede devolver la matriz con sus elementos en cualquier orden.
*/

// function diffArray(arr1, arr2) {

//     let newArr = [];
//     let max = Math.max(arr1.length, arr2.length);
     
//     for(let i = 0; i < max; i++) {
//         if(arr1.includes(arr2[i]) == false && arr2[i] != undefined) {
//             newArr.push(arr2[i]);
//         }

//         if(arr2.includes(arr1[i]) == false && arr1[i] != undefined){
//             newArr.push(arr1[i]);
//         } 
//     }
//     return newArr;
//   }

//   function diffArray(arr1, arr2) {
//     return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  
//     function diff(a, b) {
//       return a.filter(item => b.indexOf(item) === -1);
//     }
//   }

  function diffArray(arr1, arr2) {
    return diff(arr1, arr2).concat(diff(arr2, arr1));
  
    function diff(a, b) {
      return a.filter(item => !b.includes(item));
    }
  }
  console.log(diffArray([1, "calf", 3, "piglet", 7], ["filly", 1]));
  