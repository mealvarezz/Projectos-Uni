//Un objeto Automóvil con las propiedades marca, modelo y año. Construirlo mediante una función constructora y utilizar la consola para mostrar la información almacenada.

class automovil {
    constructor(marca, modelo, anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;    
    }
}

var miAuto = new automovil("Ford", "F-100", 1978);

console.log(miAuto.marca);
console.log(miAuto.modelo);
console.log(miAuto.anio);
