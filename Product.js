export class Product {
  /**
   *
   * @param {string} name nombre producto
   * @param {number} price precio producto
   * @param {number} year año de creacion del producto
   */
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}