/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = (n) => n.toString()
                                        .split('')
                                        .reduce((a,b)=>a*b,1) - n.toString()
                                        .split('')
                                        .map(n => Number(n))
                                        .reduce((a,b)=>a+b,0);


console.log(subtractProductAndSum(234)); // 15