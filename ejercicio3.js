function Producto(nombre, precio, marca) {
  this.nombre = nombre;
  this.precio = precio;
  this.marca = marca;

  this.descripcion = function() {
    console.log(this.nombre + " - " + this.marca + " - $" + this.precio);
  }
}

function Telefono(nombre, precio, marca, almacenamiento, ram) {
  Producto.call(this, nombre, precio, marca);
  this.almacenamiento = almacenamiento;
  this.ram = ram;

  this.descripcion = function() {
    console.log(this.nombre + " (Marca) " + this.marca + " (Precio) " + this.precio + " (Almacenamiento) " + this.almacenamiento + "GB (RAM) " + this.ram + "GB");
  }
}

function Laptop(nombre, precio, marca, procesador, pulgadas) {
  Producto.call(this, nombre, precio, marca);
  this.procesador = procesador;
  this.pulgadas = pulgadas;

  this.descripcion = function() {
    console.log(this.nombre + " (Marca) " + this.marca + " (Precio) " + this.precio + " (Procesador) " + this.procesador + " (Pantalla) " + this.pulgadas + ' Pulgadas');
  }
}

let tel1 = new Telefono("iPhone 17", 1400, "Apple", 256, 8);
let lap1 = new Laptop("iPad", 1200, "Apple", "M2", 13.6);

tel1.descripcion();
lap1.descripcion();
