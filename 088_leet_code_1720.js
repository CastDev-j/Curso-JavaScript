/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let result = [first];
    encoded.forEach((value, index) => {
        result.push(result[index] ^ value);
    });
    return result;
};

console.log(decode([6], 1)); // [1,0,2,1]
