//Criar as funções
//Criar o looping Do while
//Fazer um switch dentro do loop

let opcao = "";
function areaTriangulo(base, altura) {
  const resultado = base * (altura * altura);
  alert(`Resultado = ${resultado}`);
}

function areaRetangulo(base, altura) {
  const resultado = base * altura;
  alert(`Resultado = ${resultado}`);
}

function areaQuadrado(lado) {
  const resultado = lado * lado;
  alert(`Resultado = ${resultado}`);
}

function areaTrapezio(baseMaior, baseMenor, altura) {
  const resultado = ((baseMaior + baseMenor) * altura) / 2;
  alert(`Resultado = ${resultado}`);
}

function areaCirculo(raio) {
  const pi = 3.14;
  const resultado = pi * (raio * raio);
  alert(`Resultado = ${resultado}`);
}

do {
  opcao = prompt(`
  Escolha uma opção:
  1: Área do Triângulo
  2: Área do Retângulo
  3: Área do Quadrado
  4: Área do Trapézio
  5: Área do Círculo
  6: Sair`);
  switch (opcao) {
    case "1":
      const baseTriangulo = prompt("Qual a base do Triagulo? ");
      const alturaTriangulo = prompt("Qual a altura do Triagulo? ");
      areaTriangulo(baseTriangulo, alturaTriangulo);
      break;

    case "2":
      const baseRetangulo = prompt("Qual a é a base do Retângulo??");
      const alturaRetangulo = prompt("Qual a é a altura do Retângulo??");
      areaRetangulo(baseRetangulo, alturaRetangulo);
      break;

    case "3":
      const ladoQuadrado = prompt("Qual o lado do Quadrado?");
      areaQuadrado(ladoQuadrado);
      break;

    case "4":
      const baseMaiorTrapezio = prompt("Qual a Base Maior do Trapézio?");
      const baseMenorTrapezio = prompt("Qual a Base Menor do Trapézio?");
      const alturaTrapezio = prompt("Qual a altura do Trapézio?");
      areaTrapezio(baseMaiorTrapezio, baseMenorTrapezio, alturaTrapezio);
      break;

    case "5":
      const raioCirculo = prompt("Qual o Raio do círculo?");
      areaCirculo(raioCirculo);
      break;

    case "6":
      alert("Encerrando...");

    default:
      alert("Digite novamente");
  }
} while (opcao != "6");
