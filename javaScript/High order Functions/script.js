//As High Order Functions são funções que recebem como parametro outras funções

function calcular(a, b, operacao) {
  console.log("Realizando uma operação");
  //A função somar se tornou o paremetro operacao
  const resultado = operacao(a, b);
  return resultado;
}

function somar(x, y) {
  console.log("Realizando uma soma");
  return x + y;
}

//Neste caso o parametro operacao se torna a função somar
console.log(calcular(5, 5, somar));

console.log(
  calcular(8, 9, function (j, i) {
    console.log("Realizando uma subtração");
    return j - i;
  })
);

function exibirElemento(elemento, index, array) {
  console.log(elemento, index, array);
}

const lista = ["Morango", "Pessego", "Melancia", "Abacate"];

for (let i = 0; i < lista.length; i++) {
 exibirElemento(lista[i], i, lista);
}

lista.forEach(function(elemento, index, array){
  console.log(elemento, index, array)
})