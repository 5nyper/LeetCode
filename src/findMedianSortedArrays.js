/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1.push(...nums2)
    let arr = nums1.sort(function(a, b) { return a-b })
    if (arr.length % 2 !== 0) {
        return(arr[(arr.length-1)/2])
    }
    else {
        let arr1 = arr.splice(0, arr.length/2)
        console.log(arr1, arr)
        return((arr1[arr.length-1]+arr[0])/2)
    }
};
