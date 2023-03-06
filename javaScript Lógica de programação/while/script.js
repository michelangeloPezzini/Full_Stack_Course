let usuario = prompt(
  "Olá, deseja adicionar as cidades que já visitou em seu cadastro?"
);

let listaCidade = [];

while (usuario == "sim") {
  let cidade = prompt("Qual cidade deseja adicionar? ");
  usuario = prompt("Deseja continuar adicionando? ");
  listaCidade.push(cidade);
}

alert(listaCidade);
