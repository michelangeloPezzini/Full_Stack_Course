import calculate from "./calculate.js";
import copyToClipBord from "./copyToClipBord.js";
import {
  handleButtonPress,
  handleClearButton,
  handleTyping,
} from "./keyHandlers.js";
import themeSwitcher from "./themeSwitcher.js";

//Ao clicar nos botões, é necessario que durante o clique o codigo reconheça cada botão e concatene ele com o input

//selecionar todos os botoes com a chave .charkey
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  //chamar um evento de clique
  charKeyBtn.addEventListener("click", handleButtonPress);
});

//O botão C limpa o input e foca no input para continuar digitando
document.getElementById("clear").addEventListener("click", handleClearButton);

//Evento para digitação dos valores
document.getElementById("input").addEventListener("keydown", handleTyping);

//evento de clique chamando a função calculate para calcular o resultado
document.getElementById("equal").addEventListener("click", calculate);

document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipBord);

document
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwitcher);
