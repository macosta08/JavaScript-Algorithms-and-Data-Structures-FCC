/*
Proyectos de estructuras de datos y algoritmos JavaScript: 
cifrado Caesars
Uno de los cifrados más simples y más conocidos es el cifrado César , también conocido como cifrado por desplazamiento . En un cifrado por desplazamiento, los significados de las letras se desplazan en una cantidad determinada.

Un uso moderno común es el cifrado ROT13 , donde los valores de las letras se desplazan 13 lugares. Así 'A' ↔ 'N', 'B' ↔ 'O' y así sucesivamente.

Escriba una función que tome una cadena codificada con ROT13 como entrada y devuelva una cadena decodificada.

Todas las letras estarán en mayúsculas. No transforme ningún carácter no alfabético (es decir, espacios, puntuación), pero páselos.
*/

function rot13(str) {

    return str.replace(/[A-Z]/g, Letter =>
      String.fromCharCode((Letter.charCodeAt(0) % 28) + 65)
    );
  }
console.log(rot13("SERR CVMMN!"));  
console.log(("APQ".charCodeAt(0) % 26) +0);


//FCC
function rot13(str) {
    str.toUpperCase(); // Convert `str` string to uppercase letters
    var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
    var nop = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var arr = str.split(""); // Splits `str` into an array where each element is an individual character (including non-alphabetic characters)
  
      for (var i = 0; i < arr.length; i++) { // Iterate number of `arr` elements
        for (var j = 0; j < abc.length; j++) { // Iterate number of `abc`/`nop` array elements
        if (arr[i] === abc[j]) {
          arr[i] = nop[j]; // Swap the `arr` character for the corresponding `nop` array character
        } else if (arr[i] === nop[j]) {
          arr[i] = abc[j]; // Swap the `arr` character for the corresponding `abc` array character
        }
      }
    }
  
    return arr.join(""); // Join all `arr` array characters back into a string, returning the deciphered `str` with all non-alphabetical characters preserved
  }
  
  rot13("FHCRE FRPERG!!!");
  //FCC
  function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str
      .split('')
      .map(char => {  
        const pos = alphabet.indexOf(char);      
        return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
      })
      .join('');
}