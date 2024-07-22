/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let result = '';
    let open = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') open++;
        else open--;
        
        if (open === 0) {
            result += s.substring(start + 1, i);
            start = i + 1;
        }
    }
    return result;
};

console.log(removeOuterParentheses("(()())(())(()(()))")); // "()()()"