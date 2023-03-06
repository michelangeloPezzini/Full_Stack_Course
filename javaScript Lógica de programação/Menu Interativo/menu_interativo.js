let choose = "5";

do {
  choose = prompt(`Escolha uma opção:
  1: Adionar items
  2: Visualizar pedido
  3: Finalizar pedido`);

  switch (choose) {
    case "1":
      alert("Itens adicionados com sucesso!");
      break;
    case "2":
      alert("Carrinho de compras");
      break;
    case "3":
      alert("Pedido Finalizado");
      break;
    default:
      alert("Opção invalida")
  }
} while (choose != "3");
