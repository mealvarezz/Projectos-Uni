//Un objeto Automóvil con las propiedades marca, modelo y año. Construirlo mediante una función constructora y utilizar la consola para mostrar la información almacenada.

function Automovil(marca, modelo, anio)  {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;    
}

var automovil = new Automovil("Ford", "F-100", 1978);

console.log(automovil.marca);
console.log(automovil.modelo);
console.log(automovil.anio);
