/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let temp = x.toString();
    if(temp[0] == '-') {
        let newStr = '-'
        for (let i = temp.length-1; i>0; i--) {
            newStr = newStr.concat(temp[i])
        }
        if (Number(newStr) < -2147483647)
            return 0
        else
            return Number(newStr)
    }
    else {
        let newStr = ''
        for (let i = temp.length-1; i>=0; i--) {
            newStr = newStr.concat(temp[i])
        }
        if (Number(newStr) > 2147483647)
            return 0
        else
            return Number(newStr)
    }
};
