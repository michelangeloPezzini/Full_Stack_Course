export default function calculate() {
  const resultInput = document.querySelector("#result");
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  //o eval le automaticamente o que foi digitado e calcula
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}
