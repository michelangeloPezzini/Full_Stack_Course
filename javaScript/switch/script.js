let medida = prompt("Digite a medida em metros: ");
let conversor = prompt(`Para qual medida você quer converter ${medida} metros?
1) milímetro (mm)
2) centímetro (cm)
3) decímetro (dm)
4) decâmetro (dam)
5) hectômetro (hm)
6) quilômetro (km)
`);

switch (conversor) {
  case "1":
    let mm = medida * 1000;
    alert(`O resultado é ${mm} mm`);
    break;

  case "2":
    let cm = medida * 100;
    alert(`O resultado é ${cm} cm`);
    break;

  case "3":
    let dm = medida * 10;
    alert(`O resultado é ${dm} dm`);
    break;

  case "4":
    let dam = medida / 10;
    alert(`O resultado é ${dam} dam`);
    break;

  case "5":
    let hm = medida / 100;
    alert(`O resultado é ${hm} hm`);
    break;

  case "6":
    let km = medida / 1000;
    alert(`O resultado é ${km} km`);
    break;

  default:
    alert("Opção invalida");
}
