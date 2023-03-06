//1° função

//primeiro usamos o operador spread para o programa aceitar quantos parametros for necessario
const average = (...numbers) => {
  //o metodo reduce irá somar todos os valores adicionados como parametro pelo usuario
  const sum = numbers.reduce((acumulador, num) => acumulador + num, 0);
  console.log(`O total da soma é ${sum}`);
  //variavel criada para somar a quantos parametros foram escritos
  const total = numbers.length;
  console.log(`Foram digitados ${total} numeros`);
  //retorna a soma dos parametros dividido pela quantidade de parametros
  return `A média aritimética foi ${sum / total}`;
};

//console.log(average(1, 2, 3, 5, 5, 3, 3, 3, 55));

//2° função
const weightAverage = (...entrada) => {
  const sum = entrada.reduce(
    //neste caso passamos para o metodo reduce um paremetro acumulador e outro objeto, depois fazemos a soma e multiplicação desses parametros com o operador Coalescente para o caso de o parametro passado ser null ou undefined
    (acumulador, { number, weight }) => acumulador + number * (weight ?? 1),
    0
  );
  //Somando o total dos pesos
  const weightSum = entrada.reduce(
    (acumudalor, quantidade) => acumudalor + (quantidade.weight ?? 1),
    0
  );
  //retornando o somatorio do numero e peso dividido pela soma dos pesos
  return sum / weightSum;
};

console.log(
  `Média Ponderada: ${weightAverage(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 }
  )}`
);

//3° função

const medians = (...numbers) => {
  //Aqui estamos ordenando os numeros da lista, mas tambem fazendo uma copia para nao auterar a lista original
  const orderedNumbers = [...numbers].sort((a, b) => a - b);
  //Chamamos um metodo para arredondar a divisão entre a quantidade de itens dentro da lista
  const middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
  }
};
