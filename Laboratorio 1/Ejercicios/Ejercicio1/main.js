function calculosumatoria () {
    const number = parseInt(prompt( "INGRESE UN NUMERO"));


let sumatoria = 0;
let resultado = "" ;

for (let i = number; i > 0; i--) {
    sumatoria += i;
    if(i == 1) {
        resultado += i + " = ";
    }
    else{
        resultado += i + " + "
    }
}

resultado += sumatoria;
alert(resultado);
}
calculosumatoria();
