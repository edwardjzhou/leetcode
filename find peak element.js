// 162. Find Peak Element
// Medium

// 1369

// 1818

// Add to List

// Share
// A peak element is an element that is greater than its neighbors.

// Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

// The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

// You may imagine that nums[-1] = nums[n] = -∞.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 1 or 5 
// Explanation: Your function can return either index number 1 where the peak element is 2, 
//              or index number 5 where the peak element is 6.
// Note:

// Your solution should be in logarithmic complexity.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums.length <= 2) return nums.findIndex((ele)=> ele===Math.max(...nums))
    let mid = nums.length >> 1
    if (nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1]) {
        return mid
    }
    else if (nums[mid] < nums[mid+1]) {
        return mid + findPeakElement(nums.slice(mid+1)) + 1
    } else {
        return findPeakElement(nums.slice(0,mid))
    }
    
    //return nums.findIndex( ele => ele === Math.max(...nums))
};