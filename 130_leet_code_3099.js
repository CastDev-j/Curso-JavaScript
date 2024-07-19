/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum = x.toString().split('').map(Number).reduce((a, b) => a + b);

    return (x % sum)? -1 :sum;
};

console.log(sumOfTheDigitsOfHarshadNumber(18)); // 9