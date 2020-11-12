/*
Avatar de macosta08
Proyectos de estructuras de datos y algoritmos JavaScript: Palindrome Checker
Devuelve truesi la cadena dada es un palíndromo. De lo contrario, regrese false.

Un palíndromo es una palabra u oración que se escribe de la misma manera tanto hacia adelante como hacia atrás, ignorando la puntuación, el uso de mayúsculas y minúsculas y los espacios.

Nota
Deberá eliminar todos los caracteres no alfanuméricos (puntuación, espacios y símbolos) y convertir todo en el mismo caso (minúsculas o mayúsculas) para buscar palíndromos.

Pasaremos cadenas con diferentes formatos, tales como "racecar", "RaceCar"y "race CAR"entre otros.

También vamos a pasar cadenas con símbolos especiales, como "2A3*3a2", "2A3 3a2", y "2_A3*3#A2".
*/
function palindrome(str) {

    const strA = str.replace(/[^\w]|_/g, "").replace(/\s+/g, " ").toLowerCase();
    const strB = str.replace(/[^\w]|_/g, "").replace(/\s+/g, " ").split('').reverse().join("").toLowerCase();       
    return strA.includes(strB);
}
console.log(palindrome("yee"));  
 
//FCC
function palindrome(str) {
    return (
      str.replace(/[\W_]/g, "").toLowerCase() ===
      str
        .replace(/[\W_]/g, "")
        .toLowerCase()
        .split("")
        .reverse()
        .join("")
    );
}
  palindrome("0_0 (: /-\ :) 0-0");
  palindrome("five|_/|four")
  
  