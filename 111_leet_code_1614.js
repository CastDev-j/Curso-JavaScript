/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let maxDepth = 0, depth = 0;
    for (let i = 0; i < s.length; i++) {
        if(s.charAt(i) == '(')
            depth++;
        if(s.charAt(i) == ')')
            depth--;

        maxDepth = Math.max(maxDepth, depth);
    }

    return maxDepth;
};

console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // 3

