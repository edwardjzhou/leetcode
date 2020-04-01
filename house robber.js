// 198. House Robber
// Easy

// 3962

// 123

// Add to List

// Share
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    if(nums.length > 50){
        console.time("dp")
        DPSOLUTION()
        console.timeEnd("dp")
        console.time("recursion")
        RECURSIONSOLUTION()
        console.timeEnd("recursion")
        return "WRONG ANSWER"
    }
    
    
    function DPSOLUTION(){
        if (nums.length < 1) return 0 
        if (nums.length <= 2) return Math.max(...nums)
        let dp = [0, 0]
        for (let i = 0; i < nums.length; i++) {
            dp[i + 2] = Math.max(dp[i] + nums[i], dp[i+1] )
        }
        return Math.max(dp[dp.length - 1], dp[dp.length - 2])
    }
    
    function RECURSIONSOLUTION(){
        // this seems faster than the dp solution dunno why 
        if (nums.length < 1) return 0 
        function dfs(index){
            if (memo[index] === undefined) {
                if (nums.length <= 2) return Math.max(...nums)
                if (index < 0) return 0
                if (index === 0) return nums[0]
                if (index === 1) return Math.max(nums[1], nums[0])
                value = Math.max(dfs(index - 2) + nums[index], dfs(index - 1)) 
                memo[index] = value
                return value
            }
            else return memo[index]


        }
        let value 
        let memo = []
        return dfs(nums.length - 1)
    }
    return DPSOLUTION()
    
};