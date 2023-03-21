class Address {
  constructor(street, number, neighborhood, city, state) {
    this.street = street;
    this.number = number;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
  }

  fullAddress() {
    return `Rua ${this.street}, Number ${this.number}, Neighborhood ${this.neighborhood}, City ${this.city}, State ${this.state}`;
  }
}

module.exports = Address;
