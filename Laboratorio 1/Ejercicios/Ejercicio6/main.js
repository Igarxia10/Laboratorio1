let numero = [1, 2, 3, 4, 5];

let suma = 0;
let multiplicacion = 1;
let resta = numero[0];

for (let i = 0; i < numero.length; i++) {
    suma += numero[i];
    multiplicacion *= numero[i];

    if (i > 0) {
        resta -= numero[i];
    }
}

console.log("la suma de los numeros es " + suma);
console.log("la multiplicacion de los numeros es" + multiplicacion);
console.log("la resta de los numeros es " + resta);