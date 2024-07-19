/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
let result = 0;
  for (let i = 1; i <= n; i++) 
    result += (i % m === 0)? -i: i;
  

  return result;
};

console.log(differenceOfSums(10, 3)); // 19