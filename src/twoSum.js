/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res = [],
        flag = false
    nums.some((first,i1) => {
        nums.slice(1).some((second,i2) => {
            if (first + second == target) {
                if (i1 == i2+1)
                    return flag
                res = [i1, i2+1]
                flag = true
                return flag
            }
        })
        return flag
    })
    return res
};
