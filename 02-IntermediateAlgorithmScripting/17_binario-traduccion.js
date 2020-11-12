/*
Secuencias de comandos de algoritmo intermedio: 
agentes binarios
Devuelve una oración traducida al inglés de la cadena binaria pasada.

La cadena binaria estará separada por espacios.
*/
function binaryAgent(str) {
    
    var arr = str.split(" ");
    var res = "";
    arr.forEach(function(string,index,array){
                          res += String.fromCharCode(parseInt(string,2));
                          });
    return res;
}
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

function binaryAgent(str) {
    return String.fromCharCode(
      ...str.split(" ").map(function(char) {
        return parseInt(char, 2);
      })
    );
}
  
  // test here
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  );