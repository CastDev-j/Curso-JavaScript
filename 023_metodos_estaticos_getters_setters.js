//Metodos estaicos, getters y setters

//Métodos estáticos

//Los métodos estáticos son métodos que se pueden
//llamar en la clase sin necesidad de instanciar un objeto de la clase.

//Para declarar un método estático, se utiliza la palabra clave static.

class Calculadora {
    static sumar(...n) {
        return n.reduce((a, b) => a + b);
    }

    static restar(...n) {
        return n.reduce((a, b) => a - b);
    }

    static multiplicar(...n) {
        return n.reduce((a, b) => a * b);
    }

    static dividir(...n) {
        return n.reduce((a, b) => a / b);
    }
}

console.log(Calculadora.sumar(5, 3)); //8

console.log(Calculadora.restar(10, 5)); //5

console.log(Calculadora.multiplicar(2, 3)); //6

console.log(Calculadora.dividir(10, 2)); //5
