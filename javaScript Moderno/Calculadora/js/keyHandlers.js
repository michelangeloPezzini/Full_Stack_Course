import calculate from "./calculate.js";

const input = document.querySelector("#input");

export function handleButtonPress(event) {
  //dataset é utilizado para referenciar os atributos data da pagina html
  const value = event.currentTarget.dataset.value;
  //concatenar o valor do clique com o proximo
  input.value += value;
}

export function handleClearButton() {
  input.value = "";
  input.focus();
}

export function handleTyping(ev) {
  ev.preventDefault();
  const allowedKeys = [
    "(",
    ")",
    "/",
    "*",
    "-",
    "+",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    ".",
    "%",
    " ",
  ];
  //o parametro ev retorna a tecla clicada, se o valor estiver incluso no array de valores permitidos ele concatena os valores digitados
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  //apaga os valores digitados
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  //chama a função calcular
  if (ev.key === "Enter") {
    calculate();
  }
}
