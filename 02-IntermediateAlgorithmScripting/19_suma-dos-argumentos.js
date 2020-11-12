/*
Secuencias de comandos de algoritmo intermedio: argumentos opcionales
Cree una función que sume dos argumentos. Si solo se proporciona un argumento, devuelve una función que espera un argumento y devuelve la suma.

Por ejemplo, addTogether(2, 3)debería devolver 5y addTogether(2)debería devolver una función.

Llamar a esta función devuelta con un solo argumento devolverá la suma:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3)devuelve 5.

Si alguno de los argumentos no es un número válido, devuelve undefined.

*/
function addTogether() {

    const args = arguments;
    const a = args[0];
    const b = args[1];
    function isNum(num) {
      return Number.isInteger(num);
    }

    if (isNum(a)) {
      if (isNum(b))
        return a + b;
      else if (!b)
        return function(b) {
          if (isNum(b))
            return a + b;
        };
    }
}
console.log(addTogether(5)(7));
console.log(addTogether('lllllll'));
var sumTwoAnd = addTogether(2);
console.log(sumTwoAnd(3));

//FCC 
function addTogether(first, second) {
    if (typeof first !== "number") {
      return undefined;
    }
    const sum = second =>
      typeof second === "number" ? first + second : undefined;
    return typeof second === "undefined" ? second => sum(second) : sum(second);
  }
  // test here
  addTogether(2, 3);

//FCC
//jshint esversion: 6
function addTogether() {
    var args = Array.from(arguments);
    return args.some(n => typeof n !== "number")
      ? undefined
      : args.length > 1
      ? args.reduce((acc, n) => (acc += n), 0)
      : n => (typeof n === "number" ? n + args[0] : undefined);
  }
  
  // test here
  addTogether(2, 3);