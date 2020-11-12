/*
Hemos definido una función nombrada rangeOfNumberscon dos parámetros.
La función debe devolver una matriz de números enteros que comienza con un número representado por el startNumparámetro y 
termina con un número representado por el endNumparámetro. El número inicial siempre será menor o igual que el número final. 
Su función debe usar la recursividad llamándose a sí misma y no usar bucles de ningún tipo. 
También debería funcionar para casos en los que ambos startNumy endNumson iguales.
*/
function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    } else {
        const countArray = rangeOfNumbers(startNum, endNum - 1);
        countArray.push(endNum);
        return countArray;
    }
    
}
console.log(rangeOfNumbers(1, 5));