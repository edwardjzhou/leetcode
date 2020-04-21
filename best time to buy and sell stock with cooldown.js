// 09. Best Time to Buy and Sell Stock with Cooldown
// Medium

// 2030

// 76

// Add to List

// Share
// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit.You may complete as many transactions as you like(ie, buy one and sell one share of the stock multiple times) with the following restrictions:

// You may not engage in multiple transactions at the same time(ie, you must sell the stock before you buy again).
// After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
// Example:

// Input: [1, 2, 3, 0, 2]
// Output: 3
// Explanation: transactions = [buy, sell, cooldown, buy, sell]
/**
 * @param {number[]} prices
 * @return {number}
 */
//npvinhphat solution:
// there are 3 states: 
// 1. choose 1. continue holding no stock or 2. buy stock
// 2. choose 1. hold the stock you bought 2. sell the stock you bought
// 3. forced rest for 1 period

var maxProfit = function(prices) {
    if (!prices.length) return 0
    let holdorbuy = Array(prices.length).fill(0)
    let holdorsell = Array(prices.length).fill(0)
    let forcedrest = Array(prices.length).fill(0)
    holdorsell[0] =  -prices[0]
    holdorbuy[0] = 0
    forcedrest[0] = -Infinity
    for (let i = 1; i < prices.length; i++) {
        holdorbuy[i] = Math.max(holdorbuy[i-1], forcedrest[i-1]) // Math.max(having held nothing again, or having just come out of forced rest after selling )
        holdorsell[i] = Math.max(holdorsell[i-1], holdorbuy[i-1] - prices[i])
        forcedrest[i] = holdorsell[i-1] + prices[i] // being in this state. what is the max profit 
    }
    console.log(holdorsell)
    console.log(holdorbuy)
    console.log(forcedrest)

    return Math.max(holdorbuy[prices.length -1 ], forcedrest[prices.length-1])
    
};
