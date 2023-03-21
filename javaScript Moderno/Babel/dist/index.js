"use strict";

//1° função

//primeiro usamos o operador spread para o programa aceitar quantos parametros for necessario
var average = function average() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  //o metodo reduce irá somar todos os valores adicionados como parametro pelo usuario
  var sum = numbers.reduce(function (acumulador, num) {
    return acumulador + num;
  }, 0);
  console.log("O total da soma \xE9 ".concat(sum));
  //variavel criada para somar a quantos parametros foram escritos
  var total = numbers.length;
  console.log("Foram digitados ".concat(total, " numeros"));
  //retorna a soma dos parametros dividido pela quantidade de parametros
  return "A m\xE9dia aritim\xE9tica foi ".concat(sum / total);
};

//console.log(average(1, 2, 3, 5, 5, 3, 3, 3, 55));

//2° função
var weightAverage = function weightAverage() {
  for (var _len2 = arguments.length, entrada = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entrada[_key2] = arguments[_key2];
  }
  var sum = entrada.reduce(
  //neste caso passamos para o metodo reduce um paremetro acumulador e outro objeto, depois fazemos a soma e multiplicação desses parametros com o operador Coalescente para o caso de o parametro passado ser null ou undefined
  function (acumulador, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return acumulador + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  //Somando o total dos pesos
  var weightSum = entrada.reduce(function (acumudalor, quantidade) {
    var _quantidade$weight;
    return acumudalor + ((_quantidade$weight = quantidade.weight) !== null && _quantidade$weight !== void 0 ? _quantidade$weight : 1);
  }, 0);
  //retornando o somatorio do numero e peso dividido pela soma dos pesos
  return sum / weightSum;
};
console.log("M\xE9dia Ponderada: ".concat(weightAverage({
  number: 9,
  weight: 3
}, {
  number: 7
}, {
  number: 10,
  weight: 1
})));

//3° função

var medians = function medians() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  //Aqui estamos ordenando os numeros da lista, mas tambem fazendo uma copia para nao auterar a lista original
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  }); //Ordenando em ordem crescente
  //Chamamos um metodo para arredondar a divisão entre a quantidade de itens dentro da lista
  var middle = Math.floor(orderedNumbers.length / 2);
  //se for impar ele retorna o numero do meio
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle]; //posição do meio
  }

  // 1, 2, 3, 4, 2, 2
  //é necessario criar essas duas variaveis para ele verificar a media entre os dois com a função average()
  var firstMedian = orderedNumbers[middle - 1];
  var secondMedian = orderedNumbers[middle];
  return average(firstMedian, secondMedian);
};
console.log(medians(2, 5, 99, 4, 42, 7));
console.log(medians(15, 14, 8, 7, 3));
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  //Exemplo do map
  //var numbers = [1, 4, 9];
  //var roots = numbers.map(Math.sqrt);
  // roots é [1, 2, 3], numbers ainda é [1, 4, 9]
  // [ [n, qtd], [n, qtd] ]
  var quantities = numbers.map(function (num) {
    return [num,
    //aqui ele vai filtrar todos os elementos de numbers para num que sejam iguais ao n
    numbers.filter(function (n) {
      return num == n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Moda: ".concat(mode(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));