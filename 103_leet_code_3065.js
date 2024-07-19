/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length ; i++) {
        if(i!=0) i+=1;
        for (let j = 0; j < nums[i]; j++) 
            result.push(nums[i + 1]);
        
        }
    return result;

};

console.log(decompressRLElist([1,1,2,3])) // [2,4,4,4]