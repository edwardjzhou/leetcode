// 416. Partition Equal Subset Sum
// Medium

// 2110

// 61

// Add to List

// Share
// Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

// Note:

// Each of the array element will not exceed 100.
// The array size will not exceed 200.
 

// Example 1:

// Input: [1, 5, 11, 5]

// Output: true

// Explanation: The array can be partitioned as [1, 5, 5] and [11].
 

// Example 2:

// Input: [1, 2, 3, 5]

// Output: false

// Explanation: The array cannot be partitioned into equal sum subsets.

var canPartition = function (nums) {
    let total = nums.reduce((acc, ele) => acc + ele)
    if (total % 2 !== 0) return false
    let desired = total / 2

    const dp = Array.from(Array(nums.length + 1), _ => Array(desired + 1).fill(null))


    // var knapsack = function (choices, capacity = desired) {
    //     if (!choices.length) return 0
    //     let current = choices[0]
    //     if (capacity >= current) {
    //         return Math.max( 
    //             knapsack(choices.slice(1), capacity - current) + current,
    //             knapsack(choices.slice(1), capacity) )
    //         }
    //     else {
    //         return knapsack(choices.slice(1), capacity)
    //     }     
    // }


    var knapsack = function (n, C) {
        if (dp[n][C] !== null) return dp[n][C]
        if (n === 0 || C === 0) {
            result = 0
        } else if (nums[n - 1] > C) {
            result = knapsack(n - 1, C)
        } else {
            result = Math.max(knapsack(n - 1, C), nums[n - 1] + knapsack(n - 1, C - nums[n - 1]))
        }
        dp[n][C] = result
        return result
    }
    return knapsack(nums.length, desired) === desired

};