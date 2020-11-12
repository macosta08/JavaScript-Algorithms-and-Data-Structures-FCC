/* Secuencias de comandos de algoritmo básico:
 truncar una cadena
Truncar una cadena (primer argumento) si es más larga que la longitud máxima de cadena dada (segundo argumento). 
Devuelve la cadena truncada con un ...final.*/

function truncateString(str, num) {
    let result;

    if(str.length > num){
        result = str.slice(0,num) + '...';
    } else {
        result = str;
    }
    return result;

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

