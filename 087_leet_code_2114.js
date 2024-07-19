/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    return Math.max(...(sentences.map(word => word.split(' ').length)));
};

console.log(mostWordsFound(["i love leetcode", "i love coding"])); // 3