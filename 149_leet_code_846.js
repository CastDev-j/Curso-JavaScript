/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var findSuccessors = function(hand, groupSize, i, n) {
    let next = hand[i] + 1;
    hand[i] = -1;  // Mark as used
    let count = 1;
    i += 1;
    while (i < n && count < groupSize) {
        if (hand[i] === next) {
            next = hand[i] + 1;
            hand[i] = -1;
            count++;
        }
        i++;
    }
    return count === groupSize;
};

var isNStraightHand = function(hand, groupSize) {
    let n = hand.length;
    if (n % groupSize !== 0) return false;
    hand.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        if (hand[i] >= 0) {
            if (!findSuccessors(hand, groupSize, i, n)) return false;
        }
    }
    return true;
};
console.log(isNStraightHand([1,2,3,6,2,3,4,7,8], 3));// true