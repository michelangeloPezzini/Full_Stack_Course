const Post = require('./Post');

class Author {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }

  //aqui estamos instanciando a classe post com o author fazendo com que o metodo writepost receba titulo da postagem e o corpo
  writePost(title, body) {
    const post = new Post(title, body, this);
    this.posts.push(post);
    return post;
  }
}

module.exports = Author;
