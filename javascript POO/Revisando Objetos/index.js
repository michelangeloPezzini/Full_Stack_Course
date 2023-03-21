/* const book = {
  title: "Eragon",
  tags: ["Fantasy", "Adventure"],
  stock: 30,
  author: {
    name: "José da silva",
    idade: 44
  },
  addOnStock(quantity){
    this.stock += quantity
  },
  save: function(){
    //teste
    console.log("salvo")
  }

}

book.addOnStock(5)
console.log(book) */

function Book(title, pages, tags, author) {
  this.title = title; //o parametro da direita pode ter qualquer nome
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  this.inStock = 0;
  this.addOnStock = function (quantity) {
    this.inStock += quantity;
  };
}

const title = 'Harry Potter';
const pages = 983;
const tags = ['Adventure', 'Magic', 'Fantasy'];
const author = { name: 'JK' };

const harry = new Book(title, pages, tags, author);
harry.addOnStock(33);
console.log(harry);
