/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = (s) => s.split(' ').map((w) => w.split('').reverse().join('')).join(' ');

 
console.log(reverseWords("Let's take LeetCode contest")); // "s'teL ekat edoCteeL tsetnoc"