/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    if(n==1) return 1
    let i=0,j=n
    let sumL=0,sumR=0
    while(i<=j){
        sumL+=i
        i++
        if(sumL>sumR){
            sumR+=j
            j--
        } 
        if(sumL==sumR&&i==j) return i   
    }
    return -1
};

console.log(pivotInteger(8)); // -1