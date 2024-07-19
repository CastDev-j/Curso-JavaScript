let vocals = /^[aeiou]$/i;
let consonants = /^[bcdfghjklmnpqrstvwxyz]$/i; // i es para que no sea case sensitive

function countLeters(string) {
    let vocalsCount = 0;
    let consonantsCount = 0;

    for (let i = 0; i < string.length; i++) {
        if (vocals.test(string[i])) 
            vocalsCount++;
         else if (consonants.test(string[i])) 
            consonantsCount++;
    }

    return `Vocales: ${vocalsCount}, Consonantes: ${consonantsCount}`;
}

let validName = /^[a-z]+$/i; // i es para que no sea case sensitive, ^ y $ para que sea el inicio y final de la cadena, + para que sea uno o más caracteres

function validateName(name) {
    return validName.test(name);
}

let emailFormat = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i

function validateEmail(email) {
    return emailFormat.test(email);
}

console.log('Ejericio 19: Contar vocales y consonantes');
console.log(countLeters('Hola Mundo'));
console.log('Ejericio 20: Validar nombre');
console.log(validateName('Juan'));
console.log('Ejericio 21: Validar email');
console.log(validateEmail('adnres2004_cj@itcelaya.edu.mx'));
