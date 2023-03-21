const Author = require('./Author');

//Aqui ele pede apenas o autor da postagem
const newAuthor = new Author('Michelangelo');

//Aqui você cria o conteudo da postagem
const post = newAuthor.writePost(
  'Progração Front-end',
  'Hoje foi um dia de estudos de classes em javascript onde aprendi sobre instancias.',
);

//Aqui você utiliza o metodo para adicionar o nome e o conteudo do comentario
post.addComment('Gabriela Pezzini', 'Olá, tudo bem?');
post.addComment('Samsung', 'Muito bom!');

console.log(newAuthor);
console.log(post);
