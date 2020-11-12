/*
Secuencias de comandos de algoritmo intermedio: 
suma todos los primos
Un número primo es un número entero mayor que 1 con exactamente dos divisores: 1 y él mismo. 
Por ejemplo, 2 es un número primo porque solo es divisible entre 1 y 2. Por el contrario, 4 no es primo ya que es divisible entre 1, 2 y 4.

Vuelva a escribir sumPrimespara que devuelva la suma de todos los números primos que son menores o iguales que num.
*/
 
function primes(num){
    const factorial = n => !(n > 1) ? 1 : factorial(n - 1) * n;
    let numPrime = ((factorial(num - 1) + 1) % num) === 0 ? true : false; 
    return numPrime;
} 
//console.log(primes(269));

function isPrime(x) {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) return false;
    }
    return x !== 1 && x !== 0;
}

function sumPrimes(num) {
    let sumPrimes = 0;
    let i = 2; 
    function isPrime(x) {
        for (let i = 2; i < x; i++) {
          if (x % i === 0) return false;
        }
        return x !== 1 && x !== 0;
      }

    while (i <= num) {
        //console.log(i);
        if (isPrime(i)) {
            sumPrimes += i;
        }
        i++;  
    }
    return sumPrimes;
}
//console.log(sumPrimes(977));

//FCC
function sumPrimes(num) {
    let nums = Array.from({ length: num + 1 })
      .map((_, i) => i)
      .slice(2);
    for (let n in nums) {
      nums = nums.filter(val => val == nums[n] || val % nums[n] != 0);
    }
    return nums.reduce((prevSum, cur) => prevSum + cur);
}
  // test here
sumPrimes(13);

//FCC
function sumPrimes(num) {
    // step 1
    let arr = Array.from({ length: num + 1 }, (v, k) => k).slice(2);
    // step 2
    let onlyPrimes = arr.filter(n => {
      let m = n - 1;
      while (m > 1 && m >= Math.sqrt(n)) {
        if (n % m === 0) return false;
        m--;
      }
      return true;
    });
    // step 3
    return onlyPrimes.reduce((a, b) => a + b);
}
  // test here
  sumPrimes(977);