const imoveis = [];
let opcao = "";

do {
  opcao = prompt(`
  Bem Vindo(a) ao cadastro de Imóveis
  Total de Imoveis: ${imoveis.length}
  Escolha uma opção:
  1: Cadastrar novo Imovel
  2: Listar Imoveis disponiveis
  3: Sair
  `);
  switch (opcao) {
    case "1":
      const imovel = {};
      imovel.proprietario = prompt("Digite o nome do Proprietario?");
      imovel.quartos = prompt("Quantos quartos possui o Imovel?");
      imovel.banheiros = prompt("Quantos banheiros possui o imovel?");
      imovel.garagem = prompt("O imovel possui Garagem? (sim/não)");

      const confirmacao = confirm(
        `Salvar este Imovel?
        Proprietario: ${imovel.proprietario}
        Quantidade Quartos: ${imovel.quartos}
        Quantidade Banheiros: ${imovel.banheiros}
        Possui Garagem: ${imovel.garagem}
        `
      );

      if (confirmacao) {
        imoveis.push(imovel);
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imovel[i].proprietario +
            "\nQuartos: " +
            imovel[i].quartos +
            "\nBanheiros: " +
            imovel[i].banheiros +
            "\nPossui Garagem? " +
            imovel[i].garagem
        );
      }
      break;

    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (opcao != "3");
