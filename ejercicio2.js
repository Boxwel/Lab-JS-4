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

let emp1 = new Empleado("Luis", 30, 1000);
let gerente1 = new Gerente("Ana", 40, 2000, 500);
let dev1 = new Desarrollador("Carlos", 25, 1500, "JavaScript");

console.log(emp1.nombre + ": $" + emp1.calcularSalario());
console.log(gerente1.nombre + ": $" + gerente1.calcularSalario());
console.log(dev1.nombre + " (" + dev1.lenguaje + "): $" + dev1.calcularSalario());
