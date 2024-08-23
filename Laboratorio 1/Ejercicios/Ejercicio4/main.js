function esPalindromo(texto) {
    
    const textoLimpio = texto.toLowerCase().replace(/[\W_]/g, '');

    return textoLimpio === textoLimpio.split('').reverse().join('');
  }
  

  const inputUsuario = prompt("Ingresa una palabra o frase:");
  if (esPalindromo(inputUsuario)) {
    console.log(`"${inputUsuario}" es un palíndromo.`);
  } else {
    console.log(`"${inputUsuario}" no es un palíndromo.`);
  }
  