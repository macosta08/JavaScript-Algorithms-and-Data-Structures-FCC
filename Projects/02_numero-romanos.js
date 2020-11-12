/*
Proyectos de estructuras de datos y algoritmos JavaScript: 
convertidor de números romanos
Convierte el número dado en un número romano.

Todas las respuestas en números romanos deben proporcionarse en mayúsculas.
*/
// function convertToRoman(num) {

//     function romanOne(oneNum){
//         let romanObjA = {'0' : '', '1' : 'I', '2' : 'II', '3' : 'III', '4' : 'IV', '5' : 'V', '6' : 'VI', '7' : 'VII', '8' : 'VIII', '9' : 'IX'};
//         return romanObjA[oneNum];
//     }
//     function romanTwo(twoNum){
//         let romanObjB = {'0' : '', '1' : 'X', '2' : 'XX', '3' : 'XXX', '4' : 'XL', '5' : 'L', '6' : 'LX', '7' : 'LXX', '8' : 'LXXX', '9' : 'XC'};
//         return romanObjB[twoNum];
//     }
//     function romanThree(threeNum){
//         let romanObjC = {'0' : '','1' : 'C', '2' : 'CC', '3' : 'CCC', '4' : 'CD', '5' : 'D', '6' : 'DC', '7' : 'DCC', '8' : 'DCCC', '9' : 'CM'};
//         return romanObjC[threeNum];
//     }
//     function romanFour(fourNum){
//         let exponente = 'M'.repeat(fourNum);;
//         return exponente;
//     }
//     const numString = num.toString();
//     const romaOne = romanOne(numString.charAt(numString.length - 1));
//     const romaTwo = romanTwo(numString.charAt(numString.length - 2));
//     const romaThree = romanThree(numString.charAt(numString.length - 3));

//         if(numString.length == 1){
//             return romanOne(numString);
//         }else if(numString.length == 2){
//             return romaTwo + romaOne;
//         }else if(numString.length == 3){
//             return romaThree + romaTwo + romaOne;
//         }else if(numString.length == 4){
//             return romanFour(numString[0]) + romaThree + romaTwo + romaOne;
//         }
    
    
// }
// console.log(convertToRoman(9090));   

var convertToRoman = function(num) {
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
  
    var romanized = "";
  
    for (var index = 0; index < decimalValue.length; index++) {
      while (decimalValue[index] <= num) {
        romanized += romanNumeral[index];
        num -= decimalValue[index];
      }
    }
  
    return romanized;
  };
  
  // test here
 console.log(convertToRoman(43999));
