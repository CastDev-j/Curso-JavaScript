/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    gain.unshift(0);
    let max = gain[0];

    let sum = 0;
    for (let j = 1; j < gain.length; j++)
        max = Math.max(max, sum += gain[j]);


    return max;
}


console.log(largestAltitude([-5, 1, 5, 0, -7]));// 