//Arreglos en javascript



const arregloUno = [];
const arregloDos = [1,"Hola",true,[1], 'perro'];

console.log(arregloDos.flat(2).length);


const arregloObjetos = arregloDos.flat().filter(elemento => typeof elemento === 'number');

let nums = [...arregloObjetos];
console.log(nums);

let j = 1;
for (let i = 0; i < nums.length; i++) {
    if(nums[i] != nums[j]){
        nums[j] = nums[i];
        j++;
    }
}

nums.length = j;
console.log(nums);

const colores = ['rojo', 'verde', 'azul'];

const listaColores = colores.map((color,index) => {
    return `<li id='${index}'>${color}</li>`;
})


console.log(listaColores);


const numeros = [1,2,3,4,5,6,7,8,9,10];

const suma = numeros.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
},0);

console.log(suma);