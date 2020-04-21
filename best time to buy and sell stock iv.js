// 188. Best Time to Buy and Sell Stock IV
// Hard

// 1239

// 75

// Add to List

// Share
// Say you have an array for which the i-th element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete at most k transactions.

// Note:
// You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

// Example 1:

// Input: [2,4,1], k = 2
// Output: 2
// Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
// Example 2:

// Input: [3,2,6,5,0,3], k = 2
// Output: 7
// Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4.
//              Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
             
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
//copied someones solution its ingenius and broadened my understanding immensely just like its dp matrix
var maxProfit = function(k, prices) {
    
    if (k > prices.length/2) {
        let profit = 0
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i-1]) {
                profit += prices[i] - prices[i-1]
            }
        }
        return profit
    }
    
    if (!prices.length) return 0
    let dp = Array(k + 1).fill(0).map( ()=> Array(prices.length).fill(0)) 
    let profit // TOTAL PROFIT WHILE HOLDING ONTO A STOCK TO SELL
    for (let j = 1; j <= k; j++) {
        profit = -prices[0]
        for (let i = 1; i < prices.length; i++) {
            dp[j][i] = Math.max(dp[j][i-1], prices[i] + profit) // max today is max(yesterday or sell today)
            profit = Math.max(profit, dp[j-1][i-1] - prices[i] ) // yesterday with 1 less trannys max profit I BOUGHT today
        }
    }
    console.log(dp)
    return dp[k][prices.length - 1]
};

