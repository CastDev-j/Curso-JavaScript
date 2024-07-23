/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = (patterns, word) => patterns.filter(e=> word.includes(e)).length;


console.log(numOfStrings(["a","a","a"], "abc")); // 3

