//Criar as funções
//Criar o looping Do while
//Fazer um switch dentro do loop

let opcao = "";
function areaTriangulo(base, altura) {
  const resultado = base * (altura * altura);
  alert(`Resultado = ${resultado}`);
}

do {
  opcao = prompt(`
  Escolha uma opção:
  1: Área do triângulo
  2: Área do retângulo
  3: Área do quadrado
  4: Área do trapézio
  5: Área do circulo`);
  switch (opcao) {
    case "1":
      const base = prompt("Qual a base do Triagulo? ");
      const altura = prompt("Qual a altura do Triagulo? ");
      areaTriangulo(base, altura);
      break;
    default:
      alert("Digite novamente");
  }
} while (opcao != "6");
