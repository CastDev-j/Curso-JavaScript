/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
    let result = [];
    let cells = s.split(':');
    let startLetter = cells[0].charAt(0);
    let endLetter = cells[1].charAt(0);
    let start = cells[0].charAt(1);
    let end = cells[1].slice(1);


    for (let i = startLetter.charCodeAt(0); i <= endLetter.charCodeAt(0); i++)
        for (let j = start; j <= end; j++)
            result.push(String.fromCharCode(i) + j);

    return result;
};

console.log(cellsInRange("K1:L2")); // ["A1","A2","B1","B2"]