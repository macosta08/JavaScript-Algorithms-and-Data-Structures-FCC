/*
Scripting de algoritmo intermedio: 

búsqueda y reemplazo
Realice una búsqueda y reemplace en la oración utilizando los argumentos proporcionados y devuelva la nueva oración.

El primer argumento es la oración para realizar la búsqueda y reemplazarla.

El segundo argumento es la palabra que reemplazará (antes).

El tercer argumento es lo que reemplazará el segundo argumento con (después).

Nota
Conserve las mayúsculas y minúsculas del primer carácter de la palabra original cuando la reemplace. 
Por ejemplo, si quiere reemplazar la palabra "Libro" por la palabra "perro", debe reemplazarla por "Perro".
*/

function myReplace(str, before, after) {
    let after2 = after;
    if(/^[A-Z]/.test(before)){
       after2 =  after2.charAt(0).toUpperCase() + after2.slice(1);
    } else {
        after2 =  after2.toLowerCase(); 
    }
  
    return str.replace(before, after2);
}
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));  

//FCC
function myReplace(str, before, after) {
    // Find index where before is on string
    var index = str.indexOf(before);
    // Check to see if the first letter is uppercase or not
    if (str[index] === str[index].toUpperCase()) {
      // Change the after word to be capitalized before we use it.
      after = after[0].toUpperCase() + after.substring(1)
    } else {
      after = after[0].toLowerCase() + after.substring(1)
    }
    // Now replace the original str with the edited one.
    str = str.replace(before, after);
  
    return str;
}
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));