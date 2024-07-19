/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let count = 0;
    nums.forEach((num) => {
        if(num % 3) count += 1;
    });
    return count;
};

console.log(minimumOperations([1,2,3,4])); // 3