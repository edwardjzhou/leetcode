// 494. Target Sum
// Medium

// 2021

// 94

// Add to List

// Share
// You are given a list of non - negative integers, a1, a2, ..., an, and a target, S.Now you have 2 symbols + and -.For each integer, you should choose one from + and - as its new symbol.

// Find out how many ways to assign symbols to make sum of integers equal to target S.

//     Example 1:
// Input: nums is[1, 1, 1, 1, 1], S is 3.
// Output: 5
// Explanation:

// -1 + 1 + 1 + 1 + 1 = 3
//     + 1 - 1 + 1 + 1 + 1 = 3
//         + 1 + 1 - 1 + 1 + 1 = 3
//             + 1 + 1 + 1 - 1 + 1 = 3
//                 + 1 + 1 + 1 + 1 - 1 = 3

// There are 5 ways to assign symbols to make the sum of nums be target 3.
// Note:
// The length of the given array is positive and will not exceed 20.
// The sum of elements in the given array will not exceed 1000.
// Your output answer is guaranteed to be fitted in a 32 - bit integer.
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
//  2 * sum(P) = target + sum(nums)
// KEY INSIGHT: math trick + 2 for loops with sucking up the dp solution from each coin/num 

var findTargetSumWays = function(nums, S) {
    let totalsum = nums.reduce( (acc, ele) => acc+ele )
    let targetsum = (totalsum + S) / 2
    return totalsum < S || (S + totalsum) % 2 === 1 ? 0 : subsets()
    
    function subsets() {
        let dp = Array(targetsum +1).fill(0) // diff ways to get to "ele" sum
        dp[0] = 1
        
        //INGENIUS finding all ways of making that number with every num
        for (let num of nums){  /// 1 then 1 then 1 then 1 then 1 slowly propagate up
            for ( let i = targetsum; i >= num; i--){ //target is 4 ; dp[4] = dp[4] + dp[3]; dp3 = dp3 + dp2
                dp[i] += dp[i-num]
            }
            console.log(dp)
        }
        console.log(dp)
        return dp[targetsum]
    }
// [1,1,1,1,1]
// 3
// stdout
// [ 1, 1, 0, 0, 0 ] 1 way to get to (1 as the sum; aka index) with one 1
// [ 1, 2, 1, 0, 0 ]
// [ 1, 3, 3, 1, 0 ]
// [ 1, 4, 6, 4, 1 ]
// [ 1, 5, 10, 10, 5 ]


};