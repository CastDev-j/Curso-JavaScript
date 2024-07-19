// Objeto date en JavaScript

// El objeto Date en JavaScript se utiliza para trabajar con fechas y horas.

// Sintaxis
// new Date() // Fecha actual y hora actual
// new Date(milliseconds) // milisegundos 
// new Date(dateString) // MM/DD/YYYY, MM/DD/YYYY HH:MM:SS, YYYY-MM-DD, YYYY-MM-DDTHH:MM:SS 

// Métodos
// getDate() // Día del mes (1-31)
// getDay() // Día de la semana (0-6)
// getFullYear() // Año (YYYY)
// getHours() // Horas (0-23)
// getMilliseconds() // Milisegundos (0-999)
// getMinutes() // Minutos (0-59)
// getMonth() // Mes (0-11)
// getSeconds() // Segundos (0-59)
// getTime() // Milisegundos desde 1 de enero de 1970
// toString() // Fecha y hora en formato de cadena

// Ejemplo
// Crear un objeto Date
let fecha = new Date();
console.log(fecha);

// Crear un objeto Date con milisegundos
let fecha2 = new Date(86400000); // 24 horas, este es el valor de un día en milisegundos
console.log(fecha2); // es la fecha 01/01/1970 ya que es la fecha base para los milisegundos

// Crear un objeto Date con una cadena de fecha
let fecha3 = new Date('2021-01-01'); // 01 de enero de 2021
console.log(fecha3); // es la fecha 01/01/2021

// Métodos
let fecha4 = new Date();

console.log(fecha4.getDate()); // Día del mes

console.log(fecha4.getDay()); // Día de la semana

console.log(fecha4.getFullYear()); // Año

console.log(fecha4.getHours()); // Horas

console.log(fecha4.getMilliseconds()); // Milisegundos

console.log(fecha4.getMinutes()); // Minutos

console.log(fecha4.getSeconds()); // Segundos

console.log(fecha4.getMonth()); // Mes

console.log(fecha4.getTime()); // Milisegundos desde 1 de enero de 1970

console.log(fecha4.toString()); // Fecha y hora en formato de cadena

// Ejercicio

// Crear un objeto Date con la fecha actual

let fecha5 = new Date();
console.log(fecha5);

console.log(fecha5.toDateString()); // Muestra la fecha en formato de cadena

console.log(fecha5.toLocaleString()); // Muestra la fecha y la hora en formato de cadena local

console.log(fecha5.toLocaleTimeString()); // Muestra la hora en formato de cadena local

console.log(fecha5.toLocaleDateString()); // Muestra la fecha en formato de cadena local


// ejercicio cuantos años, meses, dias, horas, minutos y segundos han pasado desde que naciste

let fechaNacimiento = new Date(2004,11,14);

let milisegundos = Date.now() - fechaNacimiento.getTime();

let anios = Math.floor(milisegundos / (1000 * 60 * 60 * 24 * 365.25));

console.log(anios);

