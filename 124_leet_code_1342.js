/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let steps = 0;
  while (num > 0) {
    if(num % 2) num--;
    else num = num / 2;
    steps++;
  }

    return steps;
};

console.log(numberOfSteps(8)) // 6