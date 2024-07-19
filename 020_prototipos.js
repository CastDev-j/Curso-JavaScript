// prototipos en JS


// Definir una clase en JS
class persona{

    #nombre; // se definen sus propiedades privadas con el simbolo #
    #apellido; 
    #edad;

    constructor(nombre, apellido, edad){ // se define el constructor de la clase
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#edad = edad;
    }
    
    // se definen los metodos de la clase

    get_nombre(){ 
        return this.#nombre;
    }

    get_apellido(){
        return this.#apellido;
    }

    saludar(){ 
        console.log(`Hola, soy ${this.#nombre} ${this.#apellido} y tengo ${this.#edad} años`);
    }
}

let p1 = new persona('Juan', 'Perez', 30); // se crea una instancia de la clase persona

console.log(p1.get_nombre()); // se llama al metodo get_nombre de la instancia p1
console.log(p1.get_apellido()); // se llama al metodo get_apellido de la instancia p1
console.log(p1); // se llama al metodo toString de la instancia p1

 
p1.saludar(); // se llama al metodo saludar de la instancia p1

//Ejemplo

const animal = {
    nombre: 'Perro',
    raza: 'Pastor Aleman',
    sonido: 'Guau guau',
    ladrar(){
        console.log(this.sonido);
    }
}

console.log(animal);

const animal2 = Object.create(animal); // se crea un objeto animal2 que hereda de animal

animal2.nombre = 'Gato'; // se cambia el nombre del objeto animal2
animal2.raza = 'Siames'; // se cambia la raza del objeto animal2
animal2.sonido = 'Miau miau'; // se cambia el sonido del objeto animal2

console.log(animal2);

//Ejemplo generando un prototipo

//funcion constructora

function Animal(nombre, raza, sonido){
    this.nombre = nombre;
    this.raza = raza;
    this.sonido = sonido;

    this.sonido = ()=>{
        console.log(this.sonido);
    }
}

const a1 = new Animal('Perro', 'Pastor Aleman', 'Guau guau');

console.log(a1);
a1.sonido();
