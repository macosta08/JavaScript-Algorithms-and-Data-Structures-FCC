/*
Scripting de algoritmo intermedio: 
Pig Latin
Pig Latin es una forma de alterar las palabras en inglés. Las reglas son las siguientes:

- Si una palabra comienza con una consonante, tome la primera consonante o grupo de consonantes, muévala al final de la palabra y agregue "ay".

- Si una palabra comienza con una vocal, simplemente agregue "camino" al final.

Traduce la cadena proporcionada a Pig Latin. Se garantiza que las cadenas de entrada sean palabras en inglés en minúsculas.
*/

// https://regexr.com/

function translatePigLatin(str) {
    let result = [];
    let strArray = str.split('');
    let indice; 
    let expreRegular = /^[A-Za-z]?[^aeiou]/;

    if(['a', 'e', 'i', 'o', 'u'].includes(str[0])){
        strArray.push("way");
        return strArray.join('');
    } else {
        for(let i= 0; i < strArray.length; i++) {
            if(expreRegular.test(strArray[i])) {
            indice = i;
            result.push(strArray[i]);
            }else {
                break;
            } 
        }
    }   
    indice += 1 - strArray.length;
    let strArray2 = strArray.slice(indice);
    if(result.length === strArray.length){
        result.push("ay");
        return result.join('');
    }else {
    result = strArray2.concat(result);
    result.push("ay");
    }
    return result.join('');
}
  
console.log(translatePigLatin("california"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("rhythm"));

//FCC
function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) return str + "way";
  
    const consonantCluster = str.match(/^[^aeiou]+/)[0];
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
  }
  
  // test here
  translatePigLatin("consonant");

//FCC#2 
function translatePigLatin(str) {
    return str
      .replace(/^[aeiou]\w*/, "$&way")
      .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}
  
  // test here
  translatePigLatin("consonant");
