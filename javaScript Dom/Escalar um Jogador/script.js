function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  const confirmacao = confirm(
    `Deseja escalar o jogador ${name} como ${position}?`
  );

  //se a confirmação for verdadeira, o jogador será adicionado na lista
  if (confirmacao) {
    const teamList = document.getElementById("teamList");
    const playerItem = document.createElement("li");

    //o id do jogador concatena com o numero
    playerItem.id = "player-" + number;
    playerItem.innerText = position + ": " + name + " (" + number + ")";
    teamList.appendChild(playerItem);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removePlayer() {
  //Usuario ira digitar o numero para ser removido
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById("player-" + number);

  const confirmation = confirm(
    `Deseja remover o jogador ${playerToRemove.innerText} ?`
  );

  if (confirmation) {
    //playerToRemove.remove() Tambem funciona
    document.getElementById("teamList").removeChild(playerToRemove);
    document.getElementById("numberToRemove").value = "";
  }
}
