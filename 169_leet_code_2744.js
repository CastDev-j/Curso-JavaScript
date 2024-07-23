/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = (words) => words.length - new Set(words.map(w=>w.split('').sort().join(''))).size;


console.log(maximumNumberOfStringPairs(["abc","bca","dbe","ebd","acd"])); // 3