/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let res = word.length;
    let prev = 'a';

    for (let i = 0; i < word.length; i++) {
        let cur = word[i];
        let diff = Math.abs(cur.charCodeAt(0) - prev.charCodeAt(0));
        res += Math.min(diff, 26 - diff);
        prev = cur;
    }

    return res;
};


console.log(minTimeToType("zjpc")); // 5
