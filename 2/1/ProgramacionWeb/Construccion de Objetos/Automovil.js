//Un objeto Automóvil con las propiedades marca, modelo y año. Construirlo mediante una función constructora y utilizar la consola para mostrar la información almacenada.

function automovil(marca, modelo, anio)  {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;    
}

var automovil1 = new Automovil("Ford", "F-100", 1978);

console.log(automovil1.marca);
console.log(automovil1.modelo);
console.log(automovil1.anio);
