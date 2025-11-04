function Empleado(nombre, edad, salarioBase) {
  this.nombre = nombre;
  this.edad = edad;
  this.salarioBase = salarioBase;

  this.calcularSalario = function() {
    return this.salarioBase;
  }
}

function Gerente(nombre, edad, salarioBase, bonificacion) {
  Empleado.call(this, nombre, edad, salarioBase);
  this.bonificacion = bonificacion;

  this.calcularSalario = function() {
    return this.salarioBase + this.bonificacion;
  }
}

function Desarrollador(nombre, edad, salarioBase, lenguaje) {
  Empleado.call(this, nombre, edad, salarioBase);
  this.lenguaje = lenguaje;

  this.calcularSalario = function() {
    return this.salarioBase;
  }
}

let emplead = new Empleado("Santiago", 24, 3000);
let gerent = new Gerente("Martin", 28, 5000, 500);
let desarrollad = new Desarrollador("Pompilio", 22, 2000, "Java");

console.log(emplead.nombre + ": $" + emplead.calcularSalario());
console.log(gerent.nombre + ": $" + gerent.calcularSalario());
console.log(desarrollad.nombre + " (" + desarrollad.lenguaje + "): $" + desarrollad.calcularSalario());
