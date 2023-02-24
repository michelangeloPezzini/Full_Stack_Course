//selecionar os spans da section
const bordRegions = document.querySelectorAll("#gameBord span");
//virtualBord é um array virtual para termos um controle do que está sendo clicado
let virtualBord = [];

//turnPlayer será usado para pegar a string da vez do jogador e jogar na tela
let turnPlayer = "";

//funcao criada para atualizar a vez do jogador
function updateTitle() {
  const playerInput = document.getElementById(turnPlayer);
  //atribuir a vez do jogador no span com o id turnPlayer
  document.getElementById("turnPlayer").innerText = playerInput.value;
}

//funcao para iniciar o jogo
function initializeGame() {
  //array criado para controlar os inputs clicados
  virtualBord = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  //player um sempre vai começar
  turnPlayer = "player1";
  document.querySelector("h2").innerHTML =
    'Vez do: <span id="turnPlayer"></span>';
  updateTitle();
  //foreach usado para retirar as classes win ao recomeçar o jogo
  bordRegions.forEach(function (element) {
    element.classList.remove("win");
    //retirar todos os X ou O dos inputs
    element.innerText = "";
    element.addEventListener("click", handleBordClick);
  });
}

//funcao criada pora desabilitar o o evento apos o primeiro click
function disableRegion(element) {
  element.style.cursor = "default";
  element.removeEventListener("click", handleBordClick);
}

//funcao para registrar os cliques do bord e verificar ganhador
function handleBordClick(event) {
  const span = event.currentTarget;
  //pegando os valores data do html
  const region = span.dataset.region; //1.0
  //separa em um array
  const rowColumnPair = region.split("."); //["1","0"]
  //pega a somente a linha
  const row = rowColumnPair[0];
  //pega somente a coluna
  const column = rowColumnPair[1];

  //escreve a letra no tabuleiro
  if (turnPlayer === "player1") {
    //marca na tela
    span.innerText = "X";
    //marca no virtual bord
    virtualBord[row][column] = "X";
  } else {
    span.innerText = "O";
    virtualBord[row][column] = "O";
  }
  console.clear();
  console.table(virtualBord);
  //passando o parametro span, passa a regiao que nao podera mais ser clicada
  disableRegion(span);
  const winRegions = getWInRegions()
}

//pega o botao começar e adiciona um evento de clique que ta puxando uma função para começar
document.getElementById("start").addEventListener("click", initializeGame);
