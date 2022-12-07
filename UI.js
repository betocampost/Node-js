export class UI {
  /**
   * agregar producto nuevo
   * @param {Object} product Algun producto nuevo del objeto
   */
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name} -
                    <strong>Price</strong>: ${product.price} -
                    <strong>Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
    productList.appendChild(element);
  }

  /**
   * resetear valores del form
   */
  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("Product Deleted Succsssfully", "success");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // mostrar msj de DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");

    // insertar msj de UI
    container.insertBefore(div, app);

    // quitar mensaje despues de 3 seg
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}