function useLightTheme() {
  document.body.style.color = "#212529";
  document.body.style.backgroundColor = "#f1f5f9";
}

function useDarkTheme() {
  //a propriedade style permite você acessar as prpriedades do css no javascript
  //Neste caso estamos trocando as cores
  document.body.style.color = "#f1f5f9";
  document.body.style.backgroundColor = "#212529";
}

function switchTheme() {
  //a propriedade toggle altera a classe quando clicada
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
}

document.getElementById("lightBtn").addEventListener("click", useLightTheme);
document.getElementById("darkBtn").addEventListener("click", useDarkTheme);
document.getElementById("switchBtn").addEventListener("click", switchTheme);
