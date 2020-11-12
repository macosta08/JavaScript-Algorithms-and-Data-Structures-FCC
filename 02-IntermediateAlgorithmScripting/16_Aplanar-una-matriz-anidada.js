/*
Scripting de algoritmo intermedio: Steamroller
Aplanar una matriz anidada. Debe tener en cuenta los diferentes niveles de anidación.
*/

function steamrollArray(arr) {
  return arr
    .toString()
    .replace(",,", ",")
    .split(",")
    .map(function(v) {
      if (isNaN(v)) {
        return v;
      } else if (v == "[object Object]") {
        return {};
      } else {
        return parseInt(v);
      }
    });
}
  
console.log(steamrollArray([1, [], [3, [[4]]]]));

function steamrollArray(arr) {
    let flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}
  
  console.log(steamrollArray([1, {}, [3, [[4]]]]));
