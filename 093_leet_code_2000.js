/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let position = word.indexOf(ch);
    let part = word
                .slice(0, position + 1)
                .split('')
                .reverse()
                .join('');
    let res = part+word.slice(position + 1);
    
    return res;
};

console.log(reversePrefix("abcdefd", "d")); // "dcbaef"