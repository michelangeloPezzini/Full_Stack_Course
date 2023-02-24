const form = document.getElementById("orderForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const address = document.querySelector("#address").value;
  const breadType = document.querySelector("#breadType").value;
  const main = document.querySelector('input[name="main"]').value;
  const observations = document.querySelector("#observations").value;

  let salad = "";
  document
    .querySelectorAll('input[name="salad"]:checked')
    .forEach(function (item) {
      //item é cada um dos elementos
      salad += " - " + item.value;
    });

  console.log({
    name,
    address,
    breadType,
    main,
    salad,
    observations,
  });

  alert(
    "Pedido Realizado!" +
      "\nNome do cliente: " +
      name +
      "\nEndereço de entrega: " +
      address +
      "\nTipo de pão: " +
      breadType +
      "\nRecheio: \n - " +
      main +
      "\n" +
      salad +
      "\n" +
      "Observações: " +
      observations
  );
});
