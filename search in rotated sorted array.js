// 3. Search in Rotated Sorted Array
// Medium

// 4728

// 444

// Add to List

// Share
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// if (mid > start): <<start to mid is relatively ordered GUARANTEED>>
//      if (target bigger than start AND target smaller than mid) check for target between start and mid
//      if (target bigger than mid OR smaller than start) check for target between mid+1 and END 

 
// if (mid < start) <<mid to end is relatively ordered GUARANTEED>> 
//       if (target bigger than mid AND smaller than start) check for target between mid+1 and end 
//       if (target bigger than start OR smaller than mid) check for target between start and mid 

// normally: [small, mid, large]
// now: [start, <things greater than start ||&& smaller than mid>, mid, <things greater than mid ||&& smaller than start>]



var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1   
     
    while (left <= right) {
        let mid = (left + right) >> 1 
        if (nums[mid] === target) {
            return mid 
        } else if (nums[mid] >= nums[left]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid 
            } else {
                left = mid + 1
            }
        } else if (nums[mid] < nums[left]) {
            if (target > nums[mid] && target <= nums[right] ) {
                left = mid + 1
            } else {
               right = mid
            }
        }
    }
    
    return -1
};


//dont understand why model solution used the original nums[0] still 
// var search = function(nums, target, start, i = 0) {
//     if (!nums.length) return -1
//     let left = 0
//     let right = nums.length-1  
//     let mid = (left + right) >> 1  
//     let midval = nums[mid] //3
//     start = start || nums[0] //1

//     if (midval === target) {
//         return mid + i
//     } else if (midval >= start) {
//         if (target >= start && target < midval) {
//             return search(nums.slice(0, mid), target, start, 0 + i)
//         } else {
//             return search(nums.slice(mid+1), target, start, mid + 1 + i)
//         }
//     } else if (midval < start) {
//         if (target >= midval && target < start ) {
//             return search(nums.slice(mid+1), target, start, mid + 1 + i)
//         } else {
//             return search(nums.slice(0,mid), target, start, 0 + i)
//         }
//     }
// };


//dont understand why model solution used the original nums[0] still 
// Pochmann solution
// function search(nums,target) {
//     let low = 0
//     let high = nums.length
//     while (low < high) {
//         let mid = low + high >> 1
//         let num = nums[mid] < nums[0] == target < nums[0] ? nums[mid] : target < nums[0] ? -Infinity: Infinity
        
//         if (num < target) 
//             low = mid + 1
//         else if (num > target) 
//             high=mid
//         else 
//             return mid
//     }
//     return -1
// }

        

