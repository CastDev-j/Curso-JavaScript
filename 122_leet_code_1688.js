/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
  let result = 0;
  
    while (n > 1) {
        result += Math.floor(n / 2);
        n -= Math.floor(n / 2);
    }
    return result;
};

console.log(numberOfMatches(14)); // 6