//Metodos para obter elemento do html

function show() {
  const constacList = document.getElementById("contact-list");
  console.log(constacList);

  const listElements = document.getElementsByTagName("li");
  console.log(listElements);

  const contacts = document.querySelectorAll("#contact-list > li > label");
  console.log(contacts);
}
