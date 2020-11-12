/*
Basic Algorithm Scripting: 
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number. */
// function findLongestWordLength(str) {
//     let divideByWord = str.split(" ");
//     let result = divideByWord[0].length; 

//     for(let i = 1; i < divideByWord.length; i++) {

//         if(divideByWord[i].length > result) {
//             result = divideByWord[i].length;
//         }
//     }

//     return result;
// }
  
//   console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));

//PASO 1: Transformar el array de string en un array por cada palabra de ese string
//PASO 2: Transformar el array de string en un array de numero con el valor de la longitud de cada elemento.
//PASO 3: Encontrar el valor maximo 

function findLongestWordLength(str) {
    let divideByWord = str.split(" ");
    let result; 

    result = divideByWord.map(element => element.length);
    Math.max(...result)

    return Math.max(...result);
}
  
  console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));