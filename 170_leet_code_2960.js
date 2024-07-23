/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
    for (let i = 0; i < batteryPercentages.length; i++) {

        if(batteryPercentages[i] > 0) 
        for (let j = i + 1; j < batteryPercentages.length; j++) {
            batteryPercentages[j] = batteryPercentages[j] - 1 < 0 ? 0 : batteryPercentages[j] - 1;
        }
        
    }

    return batteryPercentages.filter(b => b > 0).length;
};

console.log(countTestedDevices([1,1,2,1,3])); // 5