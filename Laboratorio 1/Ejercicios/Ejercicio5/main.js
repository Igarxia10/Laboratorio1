let arrayOriginal = [1, 2, 3, 4, 5];

let arrayRevertido = [];

for (let i = arrayOriginal.length - 1; i >= 0; i--) {
    arrayRevertido.push(arrayOriginal[i]);
}

console.log("array original" + arrayOriginal);
console.log("array revertido" + arrayRevertido)