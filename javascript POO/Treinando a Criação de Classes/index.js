class User {
  constructor(fullName, email, password) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
  }
  login(email, password) {
    if (email == this.email && password == this.password) {
      console.log('Você está logado');
    } else {
      console.log('Email ou Senha Incorretos!');
    }
  }
}

//Cadastrando novo usuario
const newUser = new User(
  'Michelangelo Pezzini',
  'lds.pezzini@gmail.com',
  'C0nnect2022',
);

//Login do usuario
newUser.login('lds.pezzini@gmail.com', 'C0nnect2022');

class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addOnStock(quantity) {
    this.inStock += quantity;
  }
  calculateDiscount(discount) {
    this.price = this.price * ((100 - discount) / 100);
  }
}

const newProduct = new Product('Doritos', 'Salgadinho de milho e queijo', 80);

newProduct.addOnStock(145);
newProduct.calculateDiscount(15);
console.log(newProduct);
