const carroA = prompt("Qual a velocidade do Carro A");
const carroB = prompt("Qual a velocidade do Carro B");

if (carroA > carroB) {
  console.log("O carro A é mais rapido que o carro B");
} else if (carroA < carroB) {
  console.log("O carro B é mais rapido que o carro A");
} else if (carroA == carroB) {
  console.log("Os carros tem a mesma velocidade");
}
