/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let sortedNums = nums.sort((a,b) => a - b)
    let ans = []
    for(let i = 0; i < sortedNums.length; i++) {
        
        if(i === 0 || i % 2 === 0) {
            ans.push(sortedNums[i + 1])
        } else if(i % 2 === 1 ) {
            ans.push(sortedNums[i- 1])
        }
    }
    return ans
};

console.log(numberGame([1,2,3,4])) // [2,1,4,3]