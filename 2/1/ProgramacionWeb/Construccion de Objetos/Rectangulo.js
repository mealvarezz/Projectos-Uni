//Una clase Rectangulo con un constructor que reciba alto y ancho. Incorporar un método calcularArea que devuelva el área del rectángulo (alto x ancho). Crear una instancia de Rectangulo y mostrar el área calculada en la consola.

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}

var rectangulo = new Rectangulo(7, 4);

console.log("El área del rectángulo es: " + rectangulo.calcularArea());


