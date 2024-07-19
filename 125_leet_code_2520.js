/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let counter = 0;
    let nums = num.toString().split('');
    nums.forEach(n => {
        if (num % n == 0) counter++;
    });

    return counter;
};

console.log(countDigits(121)); // 3