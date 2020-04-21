// 75. Sort Colors
// Medium

// 2692

// 198

// Add to List

// Share
// Given an array with n objects colored red, white or blue, sort them in -place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

//     Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

//         Note: You are not suppose to use the library's sort function for this problem.

// Example:

// Input: [2, 0, 2, 1, 1, 0]
// Output: [0, 0, 1, 1, 2, 2]
// Follow up:

// A rather straight forward solution is a two - pass algorithm using counting sort.
//     First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
// Could you come up with a one - pass algorithm using only constant space ?
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 2 pass
function sortColors(nums) {
    let zeroes = 0
    let ones = 0
    let twos = 0
    for (let num of nums) {
        if (num === 0) zeroes++
        if (num === 1) ones++
        if (num === 2) twos++
    }

    for (let i in nums) {
        if (i < zeroes) {
            nums[i] = 0
        } else if (i < zeroes + ones) {
            nums[i] = 1
        } else {
            while (twos--) nums[i++] = 2
            break
        }
    }
    return nums
}

// one pass with 2 pointers
// profundity: ones will be dealt with by zeroes anyway. also a shrinking right ensures twos get to the right spot

// var sortColors = function(nums) {
//     let right = nums.length - 1 
//     let zeroes = 0
//     for (let i = 0; i <= right; i++) {
//         if (nums[i] === 0) {
//             swap (nums, i, zeroes++)
//         } else if (nums[i] === 1) {
//             continue
//         } else {
//             swap (nums, i--, right--)
//         }
//     }

//     return nums
// };

// function swap (array, one, two){
//         [array[one], array[two]] = [array[two], array[one]]
// }









