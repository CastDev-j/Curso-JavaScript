/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let acountsTotals = accounts.map(account => {
        return account.reduce((acc, curr) => acc + curr, 0);
    });

    let highestWealth = Math.max(...acountsTotals);
    return highestWealth;
};

maximumWealth([[1,2,3],[3,2,1]]); // 6



