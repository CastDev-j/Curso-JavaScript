/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let acumulador = 0;
    for (let index = 0; index < s.length; index++) {
        let j = t.indexOf(s[index]);
        acumulador += Math.abs(index - j);
    }
    return acumulador;
};

console.log(findPermutationDifference("abc", "bcd")); // 3