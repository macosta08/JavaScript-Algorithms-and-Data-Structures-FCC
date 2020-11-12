/*
Basic Algorithm Scripting:
 Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. */

// function repeatStringNumTimes(str, num) {
//     let result; 
//     if(num <= 0)
//     return "";
    
//     result = str.repeat(num);
//     return result;
// }
// console.log(repeatStringNumTimes("abc", 2));

function repeatStringNumTimes(str, num) {
    let result = []; 
    if(num <= 0)
    return "";
    
    for(let i= 0; i < num; i++) {
        result.push(str);
    }
    return result.join('');
}
console.log(repeatStringNumTimes("abc", 3));


