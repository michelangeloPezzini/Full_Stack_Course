function sum(...numbers) {
  //.reduce é um acumulador/somador de dados
  return numbers.reduce(
    (acumulador, numeroAtual) => acumulador + numeroAtual,
    0
  );
}

console.log(sum(1,2))
console.log(sum(1,2,4,5,1,2,3,4))