/*
Secuencias de comandos de algoritmo básico:
 Boo who
Compruebe si un valor está clasificado como primitivo booleano. Devuelve verdadero o falso.

Las primitivas booleanas son verdaderas y falsas.
*/
function booWho(bool) {

    if(typeof bool === 'boolean') {
        return true;
    } else {
        return false;
    }
}

console.log(booWho(false));

function booWho(bool) {

    return typeof bool === 'boolean';
    
}

console.log(booWho(false));