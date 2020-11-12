/*
Secuencias de comandos de algoritmo intermedio: 
hacer una persona
Complete el constructor del objeto con los siguientes métodos a continuación:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Ejecute las pruebas para ver el resultado esperado para cada método. 
Los métodos que toman un argumento deben aceptar solo un argumento y debe ser una cadena. 
Estos métodos deben ser el único medio disponible para interactuar con el objeto.
*/
var Person = function(firstAndLast) {
    var fullName = firstAndLast;
  
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
  
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
  
    this.getFullName = function() {
      return fullName;
    };
  
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
  
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
  
    this.setFullName = function(name) {
      fullName = name;
    };
  };
  
var bob = new Person('Bob Ross');

console.log(bob.getFullName());  