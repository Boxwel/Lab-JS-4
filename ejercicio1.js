function Vehiculo(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;

  this.obtenerDetalles = function() {
    console.log("Marca: " + this.marca + ", Modelo: " + this.modelo + ", Año: " + this.año);
  }
}

function Coche(marca, modelo, año, numeroPuertas) {
  Vehiculo.call(this, marca, modelo, año);
  this.numeroPuertas = numeroPuertas;

  this.obtenerDetalles = function() {
    console.log("Marca: " + this.marca + ", Modelo: " + this.modelo + ", Año: " + this.año + ", Puertas: " + this.numeroPuertas);
  }
}

function Moto(marca, modelo, año, cilindrada) {
  Vehiculo.call(this, marca, modelo, año);
  this.cilindrada = cilindrada;

  this.obtenerDetalles = function() {
    console.log("Marca: " + this.marca + ", Modelo: " + this.modelo + ", Año: " + this.año + ", Cilindrada: " + this.cilindrada + "cc");
  }
}

let coche1 = new Coche("Toyota", "Corolla", 2022, 4);
let moto1 = new Moto("Yamaha", "MT-07", 2021, 689);

coche1.obtenerDetalles();
moto1.obtenerDetalles();
