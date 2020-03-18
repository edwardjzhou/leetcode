// 283. Move Zeroes
// Easy

// 3036

// 102

// Add to List

// Share
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0
// Note:

// You must do this in -place without making a copy of the array.
// Minimize the total number of operations.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//key insight of this discussion solution: it doenst matter how many zeroes theres been before me or after me
// what matters is hwo many NON ZEROES HAVE BEEN BEFORE ME and thats where i find my ultiamte pos
var moveZeroes = function (nums) {
    let j = 0
    let temp
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) { //if youre not a zero
            temp = nums[j];
            nums[j] = nums[i]; // my final pos 
            nums[i] = temp;
            j++; // remember where to put the next non zero
        }
    }
};