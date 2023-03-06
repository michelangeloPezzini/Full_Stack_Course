//Metodos são funções atrelados aos objetos

let pessoa = {
  nome: "Mike",
  idade: 25,
  helloWord() {
    //a palavra this referencia o proprio objeto
    console.log(`Olá ${this.nome}`);
  },
};

pessoa.helloWord();
