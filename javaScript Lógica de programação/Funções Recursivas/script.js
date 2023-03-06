//Uma função recursiva é uma função que chama ela mesma
function division(num) {
  console.log(num);
  if (num % 2 == 0) {
    division(num / 2);
  } else {
    return num;
  }
}

division(512);

function fatorial(num1) {
  console.log(`Numero: ${num1}`);
  if (num1 == 0) {
    return 1;
  } else if (num1 == 1) {
    return 1;
  } else {
    console.log(`${num1} * !${num1 - 1}`);
    return num1 * fatorial(num1 - 1);
  }
}

console.log(fatorial(5));
