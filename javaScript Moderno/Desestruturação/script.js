const person = {
  name: "Mike",
  job: "Programador",
  parents: ["Katia", "Irineu"],
};

const nome = person.name;

//o javascript entende que vocÊ quer essa propriedade
const { job, parents } = person;
//criei duas variaveis a partei do array desestruturado
const [mother, father] = parents;

function createUser({ name, job, parents }) {
  //floor arredonda e o randon randomiza
  const id = Math.floor(Math.random() * 9999);
  return {
    id,
    name,
    job,
    parents,
  };
}
