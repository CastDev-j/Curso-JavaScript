/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let result = [];
    for (let i = 0; i < s.length; i++) {
       if(s.charAt(i) == 'i')
        result.reverse();
       else
        result.push(s.charAt(i));
    }

    return result.join('');
};

console.log(finalString("stringi")); // abc

