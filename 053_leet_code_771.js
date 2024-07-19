/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let score = 0;
    for (let index = 0; index < stones.length; index++) {
        if (jewels.includes(stones[index])) {
            score++;
        }
    }
    return score;
};

console.log(numJewelsInStones("aA", "aAAbbbb")); // 3