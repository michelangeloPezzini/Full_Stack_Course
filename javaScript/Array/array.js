const frutas = ["Maça", "Melancia", "Abacaxi"];

//Adiciona um elemento no final
frutas.push("Morango");

//Adiciona um elemento no inicio
frutas.unshift("Banana");

//Remove o ultimo elemento do array
//frutas.pop();

//Remove o primeiro elemento
//frutas.shift()

//Pesquisa se o elemento existe no array
//Retorna um resultado boolean
const pesquisa = frutas.includes("Melancia");

//Mostra a posição do elemento
const index = frutas.indexOf("Abacaxi");

//Recorta para si os elemento de outro array
const novasFrutas = frutas.slice(0, 2);

const nomes = ["Mike", "Gabi", "Dudu", "Denner", "Harry"];

for (let i = 0; i < nomes.length; i++) {
  let nome = nomes[i];
  console.log(`O nome ${nome} fica na posição ${i}`);
}
