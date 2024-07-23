/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = (s) => s.split('').map((v, i) => {
    if (!isNaN(parseInt(v)))
        return String.fromCharCode(s[i - 1].charCodeAt(0) + parseInt(v))
    else return v;
}).join('');


console.log(replaceDigits("a1c1e1")); // "abcdef"