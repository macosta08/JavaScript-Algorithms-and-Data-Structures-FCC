/*
Proyectos de estructuras de datos y algoritmos JavaScript: 
caja registradora
Diseñe una función de cajón de caja registradora checkCashRegister()que acepte el precio de compra como el primer 
argumento ( price), el pago como el segundo argumento ( cash) y el efectivo en el cajón ( cid) como el tercer argumento.

cid es una matriz 2D que enumera la moneda disponible.

La checkCashRegister()función siempre debe devolver un objeto con una statusclave y una changeclave.

Devuélvalo {status: "INSUFFICIENT_FUNDS", change: []}si el dinero en efectivo es menor que el cambio adeudado o si no 
puede devolver el cambio exacto.

Devolver {status: "CLOSED", change: [...]}con efectivo en caja como valor de la llave changesi es igual al cambio adeudado.

De lo contrario, devuelva {status: "OPEN", change: [...]}, con el cambio adeudado en monedas y billetes, 
ordenados de mayor a menor, como el valor de la changeclave.

Unidad monetaria	Cantidad
Centavo	$ 0.01 (centavo)
Níquel	$ 0.05 (NÍQUEL)
Moneda de diez centavos	$ 0.1 (DIME)
Trimestre	$ 0.25 (TRIMESTRE)
Dólar	$ 1 (UNO)
Cinco dólares	$ 5 (CINCO)
Diez dólares	$ 10 (DIEZ)
Veinte dólares	$ 20 (VEINTE)
Cien dolares
*/
// function checkCashRegister(price, cash, cid) {
//     let change = cash - price;
//     let cashRegister = 0;
//     cid.flat().forEach(element => {
//         if(typeof element === 'number')
//         cashRegister += element;
//     });
//     console.log(cashRegister);
//     console.log(change);
//     if(cashRegister < change)
//     //console.log(cashRegister);
//         return {status: "INSUFFICIENT_FUNDS", change: []};
// }
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));


function checkCashRegister(price, cash, cid) {
    // obtener el valor del billete 
    let valorDelBillete = [
                            ["PENNY", 0.01],
                            ["NICKEL", 0.05],
                            ["DIME", 0.1],
                            ["QUARTER", 0.25],
                            ["ONE", 1],
                            ["FIVE", 5],
                            ["TEN", 10],
                            ["TWENTY", 20],
                            ["ONE HUNDRED", 100]
                        ];
    let dineroEnCaja = 0;
    cid.flat().forEach(element => {
            if(typeof element === 'number')
                dineroEnCaja += element;
        });
    //funcion para convertir un a solo dos numeros decimales
    function financial(x) {
        return Number.parseFloat(x).toFixed(2);
    }
    let cambio = cash - price;
    let cantidadDeBilletesCambio;
    let cantidadDeBilletesCaja;
    
    let arrNuevo = [];
    for(let i = valorDelBillete.length -1 ; i  >=  0; i--){
        let valorBillestesResta = 0;
        cantidadDeBilletesCambio = cambio / valorDelBillete[i][1];
        cantidadDeBilletesCaja = cid[i][1] / valorDelBillete[i][1];
        
        if(cantidadDeBilletesCambio >= 1){
            
            if(cantidadDeBilletesCaja != 0){
                let entero = Math.trunc(cantidadDeBilletesCambio);
                while(cantidadDeBilletesCaja >= 0 || entero >= 0){
                    if(cantidadDeBilletesCaja == 0 || entero == 0){
                        break;
                    }
                    valorBillestesResta += valorDelBillete[i][1];
                    cantidadDeBilletesCaja--;
                    entero--;
                }
                cambio = cambio - valorBillestesResta;
                cambio = financial(cambio);
                dineroEnCaja -= valorBillestesResta;
                dineroEnCaja = financial(dineroEnCaja);
                arrNuevo.push([valorDelBillete[i][0], valorBillestesResta]);
                if(cambio == 0){
                    if(dineroEnCaja == 0){
                        return {status: "CLOSED", change: cid};
                    }
                    return {status: "OPEN", change: arrNuevo};
                }
            }
        }
        
    }
    return {status: "INSUFFICIENT_FUNDS", change: []};
}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));