let numero = parseInt(prompt("Qual numero deseja saber a tabuada?"));

for (let i = 0; i <= 10; i++) {
  let total = numero * i;
  console.log(`${numero}x${i} = ${total}`);
}
