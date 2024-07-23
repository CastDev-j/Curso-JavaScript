/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (let i = 0, j = s.length-1; i<j; i++,j--) {
        [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
};
console.log(reverseString(["h","e","l","l","o"])); // ["o","l","l","e","h"]