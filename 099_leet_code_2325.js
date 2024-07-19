/**
 * @param {string} key
 * @param {string} message
 * @return {string}
    97-122 ascii
*/
var decodeMessage = function(key, message) {
    let map = new Map();
    let keyArr = [...new Set(key.replaceAll(' ', ''))]

    keyArr.forEach((letter, i) =>{
        map.set(letter, String.fromCharCode(97 + i));
    })

    let result = message.split('').map(letter => {
        if (letter === ' ') {
            return ' ';
        }
        return map.get(letter);
    });

    return result.join('');
};

console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")); // "abc"