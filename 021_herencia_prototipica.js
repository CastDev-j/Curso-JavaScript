// Herencia prototipica en JavaScript


// La herencia prototipica es un mecanismo que 
// permite a un objeto heredar propiedades y metodos de otro objeto.

// En JavaScript, todos los objetos tienen una propiedad interna llamada [[Prototype]] que
// es un objeto que se utiliza como prototipo.

// Cuando se accede a una propiedad de un objeto, si el objeto no tiene esa propiedad,
// JavaScript busca en el prototipo del objeto.

// Si el prototipo del objeto tiene la propiedad, JavaScript la devuelve.


// Crear un objeto

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}


// Crear un objeto con un prototipo

let empleado = {
    salario: 1000
}


// Asignar un prototipo a un objeto

empleado.__proto__ = persona;

console.log(empleado.nombreCompleto());

// Ejemplo de herencia prototipica

// Crear un objeto

function Perro(nombre, raza, genero, peso) {
    this.nombre = nombre;
    this.raza = raza;
    this.ladrar = ()=> {
        return 'Ladrando';
    }

    this.super = Animal;
    this.super(genero, peso);
}


// Crear un prototipo

function Animal(genero, peso) {
    this.genero = genero;
    this.peso = peso;
    this.comer = ()=>{
        return 'Comiendo';
    }
}

// Asignar un prototipo a un objeto

Perro.prototype = new Animal();

// Crear un objeto
Perro.prototype.constructor = Perro;

// Agregar un metodo al prototipo
Perro.prototype.comer = ()=>{
    return 'Comiendo croquetas';
}


// Crear un objeto
let perro = new Perro('Firulais', 'Pastor Aleman', 'Macho', 30);


console.log(perro);

console.log(perro.ladrar());
console.log(perro.comer());