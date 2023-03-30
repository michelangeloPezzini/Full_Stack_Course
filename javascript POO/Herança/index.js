class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }
  getPricePerSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {}

const land = new Property(200, 50000);
const someHouse = new House(200, 50000);
console.log(someHouse.getPricePerSquareMeter());

//verifica se a instancia pertence a uma determinada classe
console.log(someHouse instanceof Property);
