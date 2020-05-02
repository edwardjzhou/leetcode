300. Longest Increasing Subsequence
Medium

4065

91

Add to List

Share
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function(nums) {
//     if (!nums.length) return 0
//     const dp = Array(nums.length).fill(1)
//     for (let i = 1; i < nums.length; i++) {
//         let best = 0
//         for (let j = 0; j < i; j++ ) {
//             if (nums[i] > nums[j]) {
//                 best = Math.max(dp[j], best)
//             }
//         }
//         dp[i] = best + 1
//     }
//     return Math.max(...dp)
// };
// math.max has to have something to compare vs if its only passed 1 argument hence Math.max() returns -Infinity



// best sol


var lengthOfLIS = function(nums) {
    const stack = []
    for (let num of nums) {
        let i = stack.length - 1
        if (!stack.length || stack[i] < num) {
            stack.push(num)
            continue
        } else {
            while (stack[i] >= num) {
                i--
            }
            stack[i+1] = num
        } 
    }
    
    return stack.length
};


// 1. bigger than me? get pushed to stack
// 2. smaller than me? keep moving left and replace the first number just BIGGEr than you (can get even faster w bsearch)