/**
 * @param {number[]} arr
 * @return {number}
 */

var sumOddLengthSubarrays = function(arr) {
    let res=0
    for(let i=0;i<arr.length;i++)
    {
        let left=i+1;
        let right=arr.length-i;
        let total=left*right;
        let total1=Math.floor((total+1)/2)
        res+=arr[i]*total1
    }
    return res
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])); // 58