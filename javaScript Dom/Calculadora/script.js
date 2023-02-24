const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");
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

//Ao clicar nos botões, é necessario que durante o clique o codigo reconheça cada botão e concatene ele com o input

//selecionar todos os botoes com a chave .charkey
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  //chamar um evento de clique
  charKeyBtn.addEventListener("click", function () {
    //dataset é utilizado para referenciar os atributos data da pagina html
    const value = charKeyBtn.dataset.value;
    //concatenar o valor do clique com o proximo
    input.value += value;
  });
});

//O botão C limpa o input e foca no input para continuar digitando
document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});

//Evento para digitação dos valores
input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
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
});


//evento de clique chamando a função calculate para calcular o resultado
document.getElementById("equal").addEventListener("click", calculate);

function calculate() {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  //o eval le automaticamente o que foi digitado e calcula
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}

document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    const button = ev.currentTarget;
    if (button.innerText === "Copy") {
      button.innerText = "Copied!";
      button.classList.add("success");
      navigator.clipboard.writeText(resultInput.value);
    } else {
      button.innerText = "Copy";
      button.classList.remove("success");
    }
  });

document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});
