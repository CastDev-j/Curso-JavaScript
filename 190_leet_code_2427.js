/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let count = 0;
    for (let i = 1; i <= Math.min(a, b); i++) 
        count += (a%i==0&&b%i==0) ? 1 : 0;
    return count;
};


console.log(commonFactors(12, 12)); // 5