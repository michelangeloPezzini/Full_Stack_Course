function upperName(name) {
  return name.toUpperCase();
}

const uppeNameArrow = (name) => name.toUpperCase();

class Menu {
  constructor(menu) {
    this.menuElemente = document.querySelector(menu);
  }
}

const menu = new Menu('.Principal');
console.log(menu);
