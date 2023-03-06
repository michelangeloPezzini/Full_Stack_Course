let saldo = parseInt(prompt("Qual a quantidade de dinheiro disponivel?"));

let opcao = "";

do {
  opcao = prompt(`Escolha uma opção:
Saldo disponivel R$ ${saldo}
1: Adicionar dinheiro
2: Remover dinheiro
3: Finalizar`);

  switch (opcao) {
    case "1":
      saldo += parseInt(prompt("Quanto você quer adicionar? "));
      alert("Dinheiro Adicionado com sucesso");
      break;

    case "2":
      saldo -= parseInt(prompt("Quanto você quer remover? "));
      alert("Dinheiro removido com sucesso");
      break;

    case "3":
      alert("Operação finalizada");
  }
} while (opcao != "3");
