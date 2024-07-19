
var finalValueAfterOperations = function(operations) {
    let val = 0;
    for (let op of operations) {
        if (op == "--X" || op == "X--") val--;
        if (op == "++X" || op == "X++") val++;
    }
    return val;
};