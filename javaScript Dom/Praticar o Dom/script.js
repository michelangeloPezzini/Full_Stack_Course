function addContact() {
  const contactSection = document.querySelector("#contacts-list");

  const h3 = document.createElement("h3");
  h3.innerText = "Contato";

  const ul = document.createElement("ul");
  const name = document.createElement("li");
  name.innerText = "Nome: ";
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  name.appendChild(nameInput);
  ul.appendChild(name);
  ul.appendChild(document.createElement("br"));

  const phoneNumber = document.createElement("li");
  phoneNumber.innerText = "Telefone: ";
  const phoneInput = document.createElement("input");
  phoneInput.type = "number";
  phoneNumber.appendChild(phoneInput);
  ul.appendChild(phoneNumber);
  ul.appendChild(document.createElement("br"));

  const address = document.createElement("li");
  address.innerText = "Endereço";
  const addressInput = document.createElement("input");
  addressInput.type = "text";
  address.appendChild(addressInput);
  ul.appendChild(address);
  ul.appendChild(document.createElement("br"));

  contactSection.append(h3, ul);
}

function removeContact() {
  const contactSection = document.querySelector("#contacts-list");

  const title = document.getElementsByTagName("h3");
  const contacts = document.getElementsByTagName("ul");

  contactSection.removeChild(title[title.length - 1]);
  contactSection.removeChild(contacts[contacts.length - 1]);
}
