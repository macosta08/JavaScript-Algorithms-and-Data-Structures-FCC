/*
Scripting de algoritmo intermedio: 
letras que faltan
Busque la letra que falta en el rango de letras aprobadas y devuélvala.

Si todas las letras están presentes en el rango, devuelve undefined.
*/
function fearNotLetter(str) {
    //const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    range('a'.charCodeAt(0), 'z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
    const index = range.indexOf(str[0]);
    const alphabetCorret = range.slice(index, index + str.length);
    let result = alphabetCorret.filter(item => !str.includes(item));
    return result.length == 0 ? undefined : result.join();
}
console.log(fearNotLetter("abd"));
fearNotLetter("abcdefghjklmno");
fearNotLetter("abcdefghijklmnopqrstuvwxyz")
//FCC
// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

function fearNotLetter(str) {
    var compare = str.charCodeAt(0),
      missing;
  
    str.split("").map(function(letter, index) {
      if (str.charCodeAt(index) == compare) {
        ++compare;
      } else {
        missing = String.fromCharCode(compare);
      }
    });
  
    return missing;
  }
  
  // test here
  fearNotLetter("abce");