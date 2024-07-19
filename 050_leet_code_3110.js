/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let score = 0;
    for (let index = 0; index < s.length - 1; index++) {
        score += Math.abs(s.charCodeAt(index) - s.charCodeAt(index+1));
    }
    return score;
};


console.log(scoreOfString("hello")); // 2