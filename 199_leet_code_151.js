/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = (s) => s.trim().split(/\s+/).reverse().join(' ');

console.log(reverseWords(' the  sky is     blue ')); // 'blue is sky the'
