/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = (n) => n.toString() == parseInt(n.toString().split('').reverse().join('')).toString().split('').reverse().join('');

console.log(isSameAfterReversals(526)); // false