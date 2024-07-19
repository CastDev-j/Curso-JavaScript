/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sumDigits =  nums.map(n => n.toString()).join('').split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    let total = nums.reduce((acc, curr) => acc + curr, 0);

    return total - sumDigits;
};

console.log(differenceOfSum([1,15,6,3]));