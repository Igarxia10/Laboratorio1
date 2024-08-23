let numero =  prompt( "ingrese un numero entero positivo");

if (numero > 0 && Number.isInteger(Number(numero))) {
    let cantidadNumero = numero.length;
    alert("el numero" + numero + "tiene" + cantidadNumero + "cifras.");
} else {
    alert("por favor, ingrese un numero entero poritivo valido");
}