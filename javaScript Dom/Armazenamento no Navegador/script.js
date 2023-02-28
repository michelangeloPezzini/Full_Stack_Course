//session storage:
//Forma simples de armazenar dados
//As informações transitam entre as paginas do site
//Ao fechar a aba, as informações são apagadas
document.getElementById("sessionBtn").addEventListener("click", function () {
  const sessonInput = document.getElementById("session");
  sessionStorage.setItem("info", sessonInput.value);
  sessonInput.value = "";
});

document.getElementById("readSesssion").addEventListener("click", function () {
  const sessionInfo = sessionStorage.getItem("info");
  alert(sessionInfo);
});

//Local Storage
//Os dados permanecem armazenados mesmo que a aba seja fechada
//Os dados existem até serem excluidos
document.getElementById("localBtn").addEventListener("click", function () {
  const localInput = document.getElementById("local");
  localStorage.setItem("local-info", localInput.value);
  localInput.value = "";
});

document.getElementById("readLocal").addEventListener("click", function () {
  const localInfo = localStorage.getItem("local-info");
  alert(localInfo);
});

//Cookies
//Dados são armazenados em pequenos arquivos de texto dentro do computador do usuario
//Podem possuir uma data de expiração
//É a forma mais tradicional de "lembrar" informações
//Pode salvar informações no back-end e enviar para o Front-end


document.getElementById('cookieBtn').addEventListener('click', function () {
  const input = document.getElementById('cookie')
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = 'info=' + input.value + ';'
  const expiration = 'expires=' + new Date(2022,9, 9) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function () {
  const input = document.getElementById('cookie2')
  // cookieName=value; expires=UTCStringDate; path=/;
  const cookie = 'text=' + input.value + ';'
  const expiration = 'expires=' + new Date(2022, 8, 9) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
  console.log(document.cookie)
})

document.getElementById