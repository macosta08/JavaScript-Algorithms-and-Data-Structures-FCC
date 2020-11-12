/*
Secuencias de comandos de algoritmo intermedio:
 caso de punción espinal
Convierte una cuerda en una caja espinal. El caso espinal es todo-palabras-en-minúsculas-unidas-por-guiones.
*/ 


function spinalCase(str) {
    
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();

}
console.log(spinalCase("holaMundoMono"));
  