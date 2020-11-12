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
