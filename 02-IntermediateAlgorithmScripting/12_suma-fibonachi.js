/*
Scripting de algoritmo intermedio: sumar todos los números de Fibonacci impares
Dado un entero positivo num, devuelve la suma de todos los números de Fibonacci impares que son menores o iguales a num.

Los dos primeros números de la secuencia de Fibonacci son 1 y 1. Cada número adicional en la secuencia es la suma de los dos números anteriores. Los primeros seis números de la secuencia de Fibonacci son 1, 1, 2, 3, 5 y 8.

Por ejemplo, sumFibs(10)debería regresar 10porque todos los números de Fibonacci impares menores o iguales que 10son 1, 1, 3 y 5.
*/

// PASO 1: hacer function Fibonacci 
// function sucesionFibonacci(num) {
//     const arrFibonacci = [0, 1, 1];
//     let fiboA = 1;
//     let fiboB = 1;
//     let i = 0;
//     while(Math.max(...arrFibonacci) < num) {
//         if (fiboA <= fiboB) {
//             fiboA += fiboB
//             arrFibonacci.push(fiboA);
//         } else if(fiboA > fiboB){
//             fiboB += fiboA
//             arrFibonacci.push(fiboB);
//         }
//         i++;
//     }
//     arrFibonacci.pop();
//     return arrFibonacci;
// }
// console.log(sucesionFibonacci(10));

//PASO 2: cambiar la serie fibonacci a solo lo impares
//PASO 3: realizar la suma 
function sumFibs(num) {
    let sumFibonacciImpar = 0;
    sucesionFibonacci(num).forEach(function(elem){
        if((elem % 2) != 0)
            sumFibonacciImpar += elem;
    });
     
function sucesionFibonacci(num) {
    const arrFibonacci = [0, 1];
    let sum = 0;
    while(sum  <= num){
        sum = arrFibonacci[arrFibonacci.length-2] + arrFibonacci[arrFibonacci.length-1]; 
        arrFibonacci.push(sum);
}
    arrFibonacci.pop();
    return arrFibonacci;
}
return sumFibonacciImpar;
}
  
console.log(sumFibs(75025));

//FCC
function sumFibs(num) {
    if (num <= 0) return 0;
  
    const arrFib = [1, 1];
    let nextFib = 0;

    while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
      arrFib.unshift(nextFib);
    }
  
    // We filter the array to get the odd numbers and reduce them to get their sum.
    return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
  }
  
  // test here
  sumFibs(4);
///FCC
  function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
  
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }
  
  // test here
  sumFibs(4);