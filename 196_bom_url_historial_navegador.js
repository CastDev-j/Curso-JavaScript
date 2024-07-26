// BOM: Objetos: URL, Historial y Navegador con javascript


let log = console.log;

log(location.href); // http:// //es la url completa
log(location.protocol); // http: //es el protocolo (http, https, file, ftp, etc)
log(location.host); // localhost:8080 //es el host y el puerto
log(location.hostname); // localhost //es el host
log(location.port); // 8080 //es el puerto
log(location.pathname); // / //es la ruta
log(location.hash); // # //es el hash (si lo hay)
log(location.search); // ? //es la query string (si la hay) // ?id=1&name=pepe

// Historial

//history.back(); //vuelve a la pagina anterior
//history.forward(); //va a la pagina siguiente
//history.go(0); //va a la pagina 0
//history.go(-1); //vuelve a la pagina anterior

// Navegador

// log(navigator.userAgent); //es el navegador que estamos usando
// log(navigator.language); //es el idioma del navegador
// log(navigator.connection); //es la conexion que tenemos
// log(navigator.cookieEnabled); //es si tenemos las cookies habilitadas
// log(navigator.geolocation); //es la geolocalizacion
// log(navigator.mediaDevices); //es los dispositivos multimedia
log(navigator.onLine); //es si estamos online
// log(navigator.serviceWorker); //es el service worker
// log(navigator.storage); //es el almacenamiento
// log(navigator.userAgentData); //es el agente de usuario
// log(navigator.vendor); //es el vendedor
// log(navigator.vendorSub); //es el subvendedor
// log(navigator.product); //es el producto
// log(navigator.platform); //es la plataforma
// log(navigator.plugins); //es los plugins
// log(navigator.mimeTypes); //es los tipos de mime
// log(navigator.appVersion); //es la version de la aplicacion
// log(navigator.appName); //es el nombre de la aplicacion
// log(navigator.appCodeName); //es el nombre del codigo de la aplicacion