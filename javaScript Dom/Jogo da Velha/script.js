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
  // Ajusta o título da página (caso seja necessário)
  document.querySelector("h2").innerHTML =
    'Vez do: <span id="turnPlayer"></span>';
  updateTitle();
  //foreach usado para retirar as classes win ao recomeçar o jogo
  bordRegions.forEach(function (element) {
    element.classList.remove("win");
    //retirar todos os X ou O dos inputs
    element.innerText = "";
    element.classList.add("cursor-pointer");
    element.addEventListener("click", handleBordClick);
  });
}

// Verifica se existem três regiões iguais em sequência e devolve as regiões
function getWinRegions() {
  const winRegions = [];
  if (
    virtualBord[0][0] &&
    virtualBord[0][0] === virtualBord[0][1] &&
    virtualBord[0][0] === virtualBord[0][2]
  )
    winRegions.push("0.0", "0.1", "0.2");
  if (
    virtualBord[1][0] &&
    virtualBord[1][0] === virtualBord[1][1] &&
    virtualBord[1][0] === virtualBord[1][2]
  )
    winRegions.push("1.0", "1.1", "1.2");
  if (
    virtualBord[2][0] &&
    virtualBord[2][0] === virtualBord[2][1] &&
    virtualBord[2][0] === virtualBord[2][2]
  )
    winRegions.push("2.0", "2.1", "2.2");
  if (
    virtualBord[0][0] &&
    virtualBord[0][0] === virtualBord[1][0] &&
    virtualBord[0][0] === virtualBord[2][0]
  )
    winRegions.push("0.0", "1.0", "2.0");
  if (
    virtualBord[0][1] &&
    virtualBord[0][1] === virtualBord[1][1] &&
    virtualBord[0][1] === virtualBord[2][1]
  )
    winRegions.push("0.1", "1.1", "2.1");
  if (
    virtualBord[0][2] &&
    virtualBord[0][2] === virtualBord[1][2] &&
    virtualBord[0][2] === virtualBord[2][2]
  )
    winRegions.push("0.2", "1.2", "2.2");
  if (
    virtualBord[0][0] &&
    virtualBord[0][0] === virtualBord[1][1] &&
    virtualBord[0][0] === virtualBord[2][2]
  )
    winRegions.push("0.0", "1.1", "2.2");
  if (
    virtualBord[0][2] &&
    virtualBord[0][2] === virtualBord[1][1] &&
    virtualBord[0][2] === virtualBord[2][0]
  )
    winRegions.push("0.2", "1.1", "2.0");
  return winRegions;
}

//funcao criada pora desabilitar o o evento apos o primeiro click
function disableRegion(element) {
  element.classList.remove("cursor-pointer");
  element.removeEventListener("click", handleBordClick);
}

//funcao para pintar os campos que o jogador ganhou
function handleWin(regions) {
  regions.forEach(function (region) {
    document
      .querySelector('[data-region = "' + region + '"]')
      .classList.add("win");
  });
  const playerName = document.getElementById(turnPlayer).value;
  document.querySelector("h2").innerHTML = playerName + " Venceu!";
}

//funcao para registrar os cliques do bord e verificar ganhador
function handleBordClick(event) {
  // Obtém os índices da região clicada
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

  const winRegions = getWinRegions();
  if (winRegions.length > 0) {
    handleWin(winRegions);
    //se tiver algum espaço vazio no tabuleiro, o jogo passa pro proximo jogador
  } else if (virtualBord.flat().includes("")) {
    turnPlayer = turnPlayer === "player1" ? "player2" : "player1";
    updateTitle();
  } else {
    document.querySelector("h2").innerHTML = "Empate";
  }
}

//pega o botao começar e adiciona um evento de clique que ta puxando uma função para começar
document.getElementById("start").addEventListener("click", initializeGame);
