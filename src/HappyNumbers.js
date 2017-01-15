/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var num = n.toString();
    var first = 0;
    num.split('').forEach((int) => {
        first += Math.pow(Number(int), 2)
    })
    if(first == 1)
        return true
    var current = first.toString()
    var last = 0;
    var count = 0
    while(true) {
        current.split('').forEach((int) => {
            last += Math.pow(Number(int), 2)
        })
        current = last.toString()
        console.log(last)
        if(last == 1) {
            return true
        }
        else if(count > 8)
            return false
    
        count++
        last = 0
    }
};
