//O operador spread pode clonar objetos iteraveis (arrays, string)
//ele clona o objeto original para nao afeta-lo
//transforma string em arrays

const town = ["Caxias", "Novo hamburgo", "Porto Alegre"];

console.log(town);
console.log(...town);
console.log(...town[0]);

//não copia de verdade
const townscOPY = town;

const townsClone = [...town];
townsClone.pop();
townsClone.push("Venancio");

console.log(town, townsClone);
