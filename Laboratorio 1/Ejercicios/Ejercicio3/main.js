function sumaCuadrados(arr) {
    return arr.reduce((sum, num) => sum + Math.pow(num, 2), 0);
  }
  
  console.log(sumaCuadrados([1, 2, 3])); // 14 (1^2 + 2^2 + 3^2)
  console.log(sumaCuadrados([4, 5, 6])); // 77 (4^2 + 5^2 + 6^2)
  console.log(sumaCuadrados([0, -1, -2])); // 5 (0^2 + (-1)^2 + (-2)^2)
  