/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = (w) => new Set(w).size === 26;

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); // true