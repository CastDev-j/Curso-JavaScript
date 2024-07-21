/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = (words, s) => s == words.map(w=>w.charAt(0)).join('');

console.log(isAcronym(["Hello", "World"], "HW"));// true

