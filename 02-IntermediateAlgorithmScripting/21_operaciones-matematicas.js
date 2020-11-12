/*
Scripting de algoritmo intermedio: 
mapear los escombros
Devuelve una nueva matriz que transforma la altitud promedio de los elementos en sus períodos orbitales (en segundos).

La matriz contendrá objetos en el formato {name: 'name', avgAlt: avgAlt}.

Puede leer sobre los períodos orbitales en Wikipedia .

Los valores deben redondearse al número entero más cercano. El cuerpo que orbita es la Tierra.

El radio de la tierra es 6367,4447 kilómetros y el valor GM de la tierra es 398600,4418 km 3 s -2 .
*/
// result =        T= 2π√a²/μ    μ = GM
/*
Math.round = retorna el valor de un número redondeado al entero más cercano
Math.PI = π
Math.pow = devuelve la  base elevada al exponente , esto es, baseexponente.

*/
function orbitalPeriod(a) {
    return a.map(p => {
      return {
        name: p.name,
        orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow((p.avgAlt + 6367.4447), 3) / 398600.4418 ))
      }
    })
}
console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    // Create new array to prevent modification of the original
    var newArr = JSON.parse(JSON.stringify(arr));
    // Loop through each item in the array arr
    newArr.forEach(function(item) {
      // Calculate the Orbital period value
      var tmp = Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
      );
      //Delete the avgAlt property
      delete item.avgAlt;
      //Add orbitalPeriod property
      item.orbitalPeriod = tmp;
    });
    return newArr;
  }
  
  // test here
  orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);