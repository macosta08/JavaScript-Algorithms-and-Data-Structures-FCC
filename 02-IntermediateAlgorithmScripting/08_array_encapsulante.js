/*
Scripting de algoritmo intermedio: 
emparejamiento de ADN
A la hebra de ADN le falta el elemento de emparejamiento. Tome cada carácter, obtenga su par y devuelva los resultados como una matriz 2d.

Los pares de bases son un par de AT y CG. Haga coincidir el elemento que falta con el carácter proporcionado.

Devuelve el carácter proporcionado como el primer elemento de cada matriz.

Por ejemplo, para la entrada GCG, devuelve [["G", "C"], ["C", "G"], ["G", "C"]]

El personaje y su par se emparejan en una matriz, y todas las matrices se agrupan en una matriz encapsulante.
*/ 

function pairElement(str) {
    let newStr = str.split('');

    let pairObj = {
        "A": ["A","T"],
        "C": ["C","G"],
        "G": ["G","C"],
        "T": ["T","A"]
    };
    return newStr.map(character => pairObj[character]);
}
console.log(pairElement("GCG")); 

//FCC
function pairElement(str) {
    // Return each strand as an array of two elements, the original and the pair.
    var paired = [];
  
    // Function to check with strand to pair.
    var search = function(char) {
      switch (char) {
        case "A":
          paired.push(["A", "T"]);
          break;
        case "T":
          paired.push(["T", "A"]);
          break;
        case "C":
          paired.push(["C", "G"]);
          break;
        case "G":
          paired.push(["G", "C"]);
          break;
      }
    };
  
    // Loops through the input and pair.
    for (var i = 0; i < str.length; i++) {
      search(str[i]);
    }
  
    return paired;
  }
  
  // test here
  pairElement("GCG");
