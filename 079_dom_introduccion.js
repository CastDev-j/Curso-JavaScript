// Introduccion al DOM
let pad = '-'.repeat(50);
let log = console.log;

log('Elementos del Documento'.padEnd(35, '-').padStart(45, '-'));
log(pad);
log('window.document'); // Se retorna el documento HTML
log(window.document); 
log(pad);
log('document'); // Se retorna el documento HTML
log(document);
log(pad);
log('document.head'); // Se retorna la cabecera del documento
log(document.head);
log(pad);
log('document.body'); // Se retorna el cuerpo del documento
log(document.body);
log(pad);
log('document.documentElement'); // Se retorna el elemento raiz del documento
log(document.documentElement);
log(pad);
log('document.doctype'); // Se retorna el tipo de documento
log(document.doctype);
log(pad);
log('document.charset'); // Se retorna el charset de la pagina
log(document.charset);
log(pad);
log('document.title'); // Se retorna el titulo de la pagina
log(document.title);
log(pad);
log('document.URL'); // Se retorna la URL de la pagina
log(document.URL);
log(pad);
log('document.domain'); // Se retorna el dominio de la pagina
log(document.domain);
log(pad);
log('document.referrer'); // Se retorna la pagina de la que se ha llegado a la actual
log(document.referrer);
log(pad);
log('document.images'); // Se retorna las imagenes de la pagina
log(document.images);
log(pad);
log('document.links'); // Se retorna los enlaces de la pagina
log(document.links);
log(pad);
log('document.forms'); // Se retorna los formularios de la pagina
log(document.forms);
log(pad);
log('document.scripts'); // Se retorna los scripts de la pagina
log(document.scripts);
log(pad);
log('document.styleSheets'); // Se retorna las hojas de estilos de la pagina
log(document.styleSheets);
log(pad);
log('document.getSelection'); // Se retorna el texto seleccionado en la pagina
setTimeout(() => {
log(document.getSelection().toString());
}, 2000);
log(pad);
log('document.write()'); // Escribe en el documento, pero no es recomendable
document.write('<h2>Este es un texto escrito con document.write()</h2>');
log(pad);
