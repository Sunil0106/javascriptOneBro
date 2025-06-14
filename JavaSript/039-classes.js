// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions ex. static keyword, encapsulation, inheritance

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price.toFixed(2)}`);
  }
  calculateTotal(saleTax) {
    return this.price + this.price * saleTax;
  }
}

const product1 = new Product("shirt", 19.99);
product1.displayProduct();

const product2 = new Product("Pants", 22.5);
product2.displayProduct();

const product3 = new Product("Underwear", 100);
product3.displayProduct();

const saleTax = 0.05;

const total = product1.calculateTotal(saleTax);
console.log(`total price (with tax) : $${total.toFixed(2)}`);
