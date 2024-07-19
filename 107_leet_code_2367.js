/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let set = new Set(nums)
    let count = 0;
    for(let num of nums){
        if(set.has(num-diff)&&set.has(num-diff-diff)){
            count++
        }
    }
    return count;
};

console.log(arithmeticTriplets([3, 6, 9, 12], 3)); // 3