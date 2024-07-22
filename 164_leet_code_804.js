/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    let dictionary = {
        'a': ".-",
        'b': "-...",
        'c': "-.-.",
        'd': "-..",
        'e': ".",
        'f': "..-.",
        'g': "--.",
        'h': "....",
        'i': "..",
        'j': ".---",
        'k': "-.-",
        'l': ".-..",
        'm': "--",
        'n': "-.",
        'o': "---",
        'p': ".--.",
        'q': "--.-",
        'r': ".-.",
        's': "...",
        't': "-",
        'u': "..-",
        'v': "...-",
        'w': ".--",
        'x': "-..-",
        'y': "-.--",
        'z': "--.."
    };

    let result = new Set();

    for (let i = 0; i < words.length; i++) {
        let morse = '';
        for (let j = 0; j < words[i].length; j++) {
            morse += dictionary[words[i][j]];
        }
        result.add(morse);
    }

    return result.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])); // 2