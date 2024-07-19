/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = [];
    for (let i = 0; i < nums.length; i++) {
        if(target[index[i]] != undefined){
            target.splice(index[i], 0, nums[i]);
        }else{
            target.push(nums[i]);
        }
    }
    return target;
};

console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1])); // [0,4,1,3,2]