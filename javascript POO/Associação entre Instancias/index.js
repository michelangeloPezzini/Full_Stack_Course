const Address = require('./Address');

const myAddress = new Address(
  'Raul Stringhi',
  100,
  'Jardelino Ramos',
  'Caxias do Sul',
  'RS',
);
console.log(myAddress);

const Person = require('./Person');

//Aqui é feito a associação entre duas classes
const newPerson = new Person('Michelangelo', myAddress);
//para acessar os metodos de uma classe, você precisa acessar a classe antes
const fullAddress = newPerson.adress.fullAddress();
console.log(fullAddress);
