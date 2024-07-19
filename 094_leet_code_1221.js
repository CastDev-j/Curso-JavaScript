/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let counter = 0;

    let counterL = 0;
    let counterR = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            counterR++;
        }
        if (s[i] === 'L') {
            counterL++;
        }

        if (counterL === counterR) {
            counter++;
            counterL = 0;
            counterR = 0;
        }
    }

    return counter;

};

console.log(balancedStringSplit("LLLLRRRR")); // 4