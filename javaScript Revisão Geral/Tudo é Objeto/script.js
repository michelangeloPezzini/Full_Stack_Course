const menu = {
  selector: '.principal',
  ativar() {
    //Document é um objeto e o queryselector é um metodo
    const menuElement = document.querySelector(this.selector);
    console.log(menuElement);
  },
};

menu.ativar();
