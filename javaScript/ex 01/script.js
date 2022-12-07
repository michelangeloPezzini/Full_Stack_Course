let firstName = prompt("Digite o seu nome? ");
let lastName = prompt("Digite o seu sobrenome? ");
let study = prompt("O que você estuda? ");
let birth = prompt("Qual o seu ano de nascimento? ");

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let age = currentYear - parseInt(birth);

console.log(`Seu nome é ${firstName} ${lastName}.`);
console.log(`Sua area de estudo é ${study}.`);
console.log(`Sua idade é ${age}`);
