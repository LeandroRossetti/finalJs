/* Se crea una clase constructora para poder crear el menú */
class Product {
    constructor(id, name, price, drink, food, dessert, stock, description,urlImg) {
        this.id = id;
        this.name = name.toUpperCase();
        this.price = price;
        this.drink = drink;
        this.food = food;
        this.dessert = dessert;
        this.stock = stock;
        this.descripcion = description;
        this.urlImg=urlImg;

    }
    getCard() {
        return (`      <div class="card animate__animated animate__fadeIn">
    <img class="card-img-top" src="${this.urlImg}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${this.name} $ ${this.price}</h5>
      <p class="card-text">${this.descripcion}</p>
      <a href="#" class="btn btn-primary" id=btnDegustacion_${this.id}>+</a>
    </div>
  </div>`  )
    }
}

//Declaramos un array de productos para almacenar objetos
export function returnProducts() {

    const products = [];
    products.push(new Product(1, "Degustación vinos", 2150, true, false, false, 100, "Degustación de nuestros 4 vinos emblemas de la casa."));
    products.push(new Product(2, "Copadevino", 750, true, false, false, 10, "","./img/degustacion.jpg"));
    products.push(new Product(3, "Botella de vino 2014", 4999, true, false, false, 1, ""));
    products.push(new Product(4, "Empanada", 120, false, true, false, 12, ""));
    products.push(new Product(5, "Ensalada Caesar", 800, false, true, false, 5, ""));
    products.push(new Product(6, "Wok de pollo", 1100, false, true, false, 20, ""));
    products.push(new Product(7, "Cupcakes", 200, false, false, true, 80, ""));
    products.push(new Product(8, "Caja de 6u Macaroons", 400, false, false, true, 20, ""));
    products.push(new Product(9, "Postre Oreo", 650, false, false, true, 2, ""));




    return products;
}











/* for (const iterator of products) {
    
    if (iterator.id===1)

    console.log(iterator.price);
}
 */



/* for (const key in products) {
    if (products.hasOwnProperty.call(products, key)) {
        // const element = products[key];
        console.log(key);
    }

} */

/* <div class="card"  >
        <img class="card-img-top" src="./img/vinoCaro.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Botella vino tinto $4999</h5>
          <p class="card-text">Botella de vino tinto cosecha 2014.</p>
          <a href="#" class="btn btn-primary"> +</a>
        </div>
      </div> */