/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
    let minAvg = null
    let left = 0, right = nums.length-1
    nums.sort((a, b) => a - b)

    while(left < right){
        let avg = (nums[left] + nums[right]) / 2
        minAvg = minAvg == null ? avg : Math.min(avg, minAvg)
        left++
        right--
    }

    return minAvg;

};

console.log(minimumAverage([7,8,3,4,15,13,4,1]));