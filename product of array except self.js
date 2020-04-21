238. Product of Array Except Self
Medium

4221

366

Add to List

Share
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answer = []
    let right = 1
    let left = 1

    for (let i = 0; i < nums.length; i++) {
        answer[i] = left
        left *= nums[i]
    }
    
    for (let i = nums.length - 1; i >=0; i--) {
        answer[i] = answer[i] * right
        right *= nums[i]
    }
    return answer
}