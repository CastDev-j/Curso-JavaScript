/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let counter = 0;

    for (let i = 0; i < words.length; i++) {
        let flag = true;
        for (let j = 0; j < words[i].length; j++) {
            if (!allowed.includes(words[i][j])) {
                flag = false;
                break;
            }
        }

        counter += flag ? 1 : 0;
    }
    return counter;
};

console.log(countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])); // 7