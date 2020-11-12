/*
Basic Algorithm Scripting: 
Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead. */

// function confirmEnding(str, target) {
    
//     return str.endsWith(target);
  
// }
// console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));

function confirmEnding(str, target) {
    let result;

    result = str.slice(-target.length) == target? true : false;
    
   return result;
  
}
console.log(confirmEnding("Open sesame", "same"));
