// Modulos en js (import y export)

// Importar modulos
import { PI, usuario, password, saludar, Saludar, persona} from './031_modulos/cosntantes.mjs';
import aritmetica,{PI2} from './031_modulos/aritmetica.js';

console.log('Inicio del archivo 031_modulos_import_export.js');

console.log(PI);
console.log(`Usuario: ${usuario} y Password: ${password}`);
 
let saludo = new Saludar();
saludo.saludar();
saludar();

console.log(persona);
persona.saludar();

for (const clave in persona) {
    console.log(`Key: ${clave}, Value: ${persona[clave]}`);
}

// Importar funciones de aritmetica

console.log(aritmetica.sumar(3, 4));
console.log(aritmetica.restar(3, 4));
console.log(aritmetica.multiplicar(3, 4));
console.log(aritmetica.dividir(3, 4));
console.log(PI2);