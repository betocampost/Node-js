import { Product } from "./Product.js";
import { UI } from "./UI.js";

document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // obtiene los valores del form
    const name = document.getElementById("name").value,
      price = document.getElementById("price").value,
      year = document.getElementById("year").value;

    // Crear nuevo objeto
    const product = new Product(name, price, year);

    // Crear nueva instancia del UI
    const ui = new UI();

    // Iingreso de la validacion de usuario
    if (name === "" || price === "" || year === "") {
      ui.showMessage("Please Insert data in all fields", "danger");
    }

    // guardar productos
    ui.addProduct(product);
    ui.showMessage("Product Added Successfully", "success");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});