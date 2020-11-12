/*
Scripting de algoritmo básico: 
Chunky Monkey
Escriba una función que divida una matriz (primer argumento) en grupos de la longitud de size(segundo argumento)
 y los devuelva como una matriz bidimensional. */

 function chunkArrayInGroups(arr, size) {

    var newArray = [];
    var i = 0;
  
    while (i < arr.length) {

        newArray.push(arr.slice(i, i + size));

      i += size;
    }
    return newArray;
  }
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); 

// var alumnos = [1,2,3,4]
// var index = alumnos.length;
// var primeraParte = alumnos.slice(0, index);
// var segundaParte = alumnos.slice(index/3,index);
// console.log(primeraParte);
// console.log(segundaParte);
//FCC
function chunckArrayInGroups(arr, size) {
    var chunk = [], i; // declara array vacio e indice de for
    for (i = 0; i <= arr.length; i+= size) // loop que recorre el array 
      chunk.push(arr.slice(i, i + size)); // push al array el tramo desde el indice del loop hasta el valor size + el indicador 
    return chunk;
}
//FCC
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}