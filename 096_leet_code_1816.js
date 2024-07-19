/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = (s, k) => s.split(' ').slice(0, k).join(' ');