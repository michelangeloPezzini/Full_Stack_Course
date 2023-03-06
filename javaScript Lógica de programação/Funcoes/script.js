//Parametro é uma variavel que fica disponivel dentro da função
//Ela é prenchida ou informada quando a função é chamada

//Os parametros podem ter um valor default, que seria um valor padrão
function nome(nome = "Mike") {
  console.log(`Olá ${nome}`);
}
nome("Gabriela");

function soma(a, b) {
  const resultado = a + b;
  return resultado;
}

const novaSoma = soma(5, 8);
console.log(novaSoma);

function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
    estoque: 1,
  };
  return produto;
}

const notebook = criarProduto("Nitro 5 Core i5 16 gb", 4500);
console.log(notebook);

function terceiraIdade(idade) {
  console.log(typeof idade);
  if (idade <= 60) {
    return true;
  } else {
    false;
  }
}
console.log(terceiraIdade("60"));
