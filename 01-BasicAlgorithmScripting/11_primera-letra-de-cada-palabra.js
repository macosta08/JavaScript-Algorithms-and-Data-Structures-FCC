/*
Secuencias de comandos de algoritmo básico: 

caso de título una oración
Devuelve la cadena proporcionada con la primera letra de cada palabra en mayúscula. Asegúrese de que el resto de la palabra esté en minúsculas.

A los efectos de este ejercicio, también debe usar mayúsculas para conectar palabras como "el" y "de".
 */

function titleCase(str) {
    let stringNew = str.toLowerCase().split(" "); 
    let result;
    result = stringNew.map(element => element.replace( element.charAt(0), element.charAt(0).toUpperCase()) );

    return result.join(' ');
}
console.log(titleCase("I'm a little tea pot"));

function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}
console.log(titleCase("I'm a little tea pot"));