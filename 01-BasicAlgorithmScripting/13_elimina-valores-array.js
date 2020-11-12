/*
Scripting de algoritmo básico: 
Falsy Bouncer
Elimina todos los valores falsos de una matriz.

Falsy valores en JavaScript son false, null, 0, "", undefined, y NaN.

Sugerencia: intente convertir cada valor en un booleano. 
*/

function bouncer(arr) {
    let val = [NaN, "", 0, undefined, false, true, null];
    let newArr; 
    newArr = arr.filter(element => !val.includes(element));
    return newArr;
}
console.log(bouncer([7, "ate", "", false, 9]));



function bouncer(arr) {
    return arr.filter(Boolean);
  }
  console.log(bouncer([7, "ate", "", false, 9]));