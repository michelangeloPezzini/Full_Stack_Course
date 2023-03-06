const a = 0; //false
const b = null; //false
const c = "string"; //true

console.log(a || b || c);
//retorna um valor do lado direitro quando os valores do lade esquerdo são null ou undefined
console.log(a ?? b ?? c);

let n1 = 0;
let n2 = n1 || 98;
console.log({ n1, n2 });
