/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let result = [s.length];
    indices.forEach(value => {
        result[value] = s[indices.indexOf(value)];
    });

    return result.join('');
};

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3])); // "leetcode"