/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    if(nums.length === 0)
        return false
    let index = 0
    let pastIndex = 0
    for (let i = 0; i<nums.length+1; i++) {
        if (index < 0 || nums.length === 0)
            return false
        if (index < nums.length) {
            console.log(pastIndex + " + " + nums[index])
            index = pastIndex+nums[index]
            pastIndex = index
        }
        else if(index > nums.length && i<nums.length) {
            //console.log("i : " + i)
            index = nums.length-i
            pastIndex = index
            console.log(pastIndex)
        }
        else {
            if(nums[index-1] !== undefined && nums[index] === undefined)
                return true
            else
                return false
        }
            
    }
    return false
    
};
