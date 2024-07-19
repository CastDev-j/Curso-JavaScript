/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result  = nums.map((num) => {
        let count = 0;
        nums.forEach((n) => {
            if (num > n) count++;
        });
        return count
    });
    
    return result;
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3])); // [4,0,1,1,3]