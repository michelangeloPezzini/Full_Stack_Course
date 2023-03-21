/* function Book(title, pages, tags, author){
  this.title = title //o parametro da direita pode ter qualquer nome
  this.pages = pages
  this.tags = tags
  this.author = author
  this.published = false
  this.inStock = 0
  this.addOnStock = function (quantity){
    this.inStock += quantity
  }
}

const title = "Harry Potter"
const pages = 983
const tags = ["Adventure", "Magic", "Fantasy"]
const author = {name: "JK"}

const harry = new Book(title, pages, tags, author)
harry.addOnStock(33)
console.log(harry) */

class Book {
  constructor(title) {
    this.title = title;
    this.published = false;
  }
  publish() {
    this.published = true;
  }
}

//instanciar é criar um novo objeto atraves de uma classe
const harry = new Book('Harry Potter');
harry.publish();
console.log(harry);
