//Clases y herencia en JavaScript

//Clases en JavaScript
//Las clases en JavaScript son una forma de definir un objeto.

//En JavaScript, las clases son funciones. Las clases se declaran con la palabra clave class.

//Ejemplo:

class Vehiculo {
    #encendido = false;
    #anio;

    constructor(anio) {
        this.#anio = anio;
    }
    
    encender() {
        if(!this.#encendido) {
            this.#encendido = true;
            console.log('Encendiendo el vehículo');
        } else {
            console.log('El vehículo ya está encendido');
        }
    }
    apagar() {
        if (this.#encendido) {
            this.#encendido = false;
            console.log('Apagando el vehículo');
        } else {
            console.log('El vehículo ya está apagado');
        }
    }

    obtenerAnio() {
        return this.#anio;
    }
}

class Carro extends Vehiculo {
    #marca;
    #modelo;

    constructor(marca, modelo, anio) {
        super(anio);
        this.#marca = marca;
        this.#modelo = modelo;
    }

    obtenerMarca() {
        return this.#marca;
    }

    obtenerModelo() {
        return this.#modelo;
    }

    obtenerDatos() {
        return `Marca: ${this.#marca}, Modelo: ${this.#modelo}, Año: ${this.obtenerAnio()}`;
    }
}

const carro = new Carro('Toyota', 'Corolla', 2020);

console.log(carro.obtenerDatos());

// Otro ejemplo

class Animal{
    #genero;
    #edad;

    constructor(genero, edad){
        this.#genero = genero;
        this.#edad = edad;
    }

    obtenerGenero(){
        return this.#genero;
    }

    obtenerEdad(){
        return this.#edad;
    }

    sonido(){
        return 'Sonido de animal';
    }
}

class Perro extends Animal{
    #raza;

    constructor(genero, edad, raza){
        super(genero, edad);
        this.#raza = raza;
    }

    obtenerRaza(){
        return this.#raza;
    }

    obtenerDatos(){
        return `Raza: ${this.#raza}, Genero: ${this.obtenerGenero()}, Edad: ${this.obtenerEdad()}, Sonido: ${this.sonido()}`;
    }

    sonido(){
        return 'Guau guau';
    }
}

const perro = new Perro('Macho', 5, 'Labrador');

console.log(perro.obtenerDatos());

console.log(perro);

