let choose = "3";
const pacientes = [];

do {
  let paciente = "";
  for (let i = 0; i < pacientes.length; i++) {
    paciente += i + 1 + "° -" + pacientes[i] + "\n";
  }
  choose = prompt(
    "Pacientes:\n" +
      paciente +
      "\nEscolha uma opção:\n1: Atender paciente\n2: Adicionar paciente\n3: Sair"
  );

  switch (choose) {
    case "1":
      alert("Paciente atendido com sucesso");
      pacientes.shift();
      break;
    case "2":
      let novoPaciente = prompt("Qual o nome do paciente? ");
      pacientes.push(novoPaciente);
      break;
    case "3":
      alert("Atendimentos finalizados");
      break;
    default:
      alert("Opção invalida");
  }
} while (choose != "3");
