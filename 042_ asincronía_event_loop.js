//Asincronia y el Event Loop en JS

// JS es un lenguaje de programacion asincrono, 
// esto significa que puede ejecutar varias tareas al mismo tiempo

// Codigo sincrono: se ejecuta una linea de codigo a la vez
// Codigo asincrono: se ejecutan varias tareas al mismo tiempo

//codigo sincrono bloqueante: una tarea debe esperar a que otra termine para poder ejecutarse

(()=>{
    console.log('Codigo síncrono'); //1
    console.log('Inicio'); //2

    function dos() {
        console.log('Dos'); //6
    }

    function uno() { 
        console.log('Uno'); //4
        dos(); //5
        console.log('Tres'); //7
    }

    uno(); //3
    console.log('Fin'); //8

})();


console.log('-------------------------------------');
//codigo asincrono no bloqueante: una tarea puede ejecutarse sin esperar a que otra termine

(()=> {
    console.log('Codigo síncrono'); // 1
    console.log('Inicio'); // 2

    function dos() {
        setTimeout(() => {
            console.log('Dos'); // 7
        }, 1000);
    }

    function uno() { 
        setTimeout(() => {
            console.log('Uno'); // 6
        }, 0);
            dos(); // 4
            console.log('Tres'); // 5

    }

    uno(); // 3
    console.log('Fin'); // 5

})();