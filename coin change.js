// 322. Coin Change
// Medium

// 3115

// 104

// Add to List

// Share
// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:

// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Note:
// You may assume that you have an infinite number of each kind of coin.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */


 // 2^100 permutations crashing my computer. whoops
// var coinChange = function(coins, amount) {
//     if (amount === 0) return 0
//     if(Math.min(...coins) > amount) return -1

//     let answer = []
//     for(let i = 0; i < amount; i++){
//         answer.push([])
//     }


//     // answer[Math.min(...coins) - 1].push([Math.min(...coins)])

//     const adder = (amount) => {
//         for (let i = 0; i < amount; i++) {
//             if (answer[i]){
//                 coins.forEach(coin => { 
//                     if(i + 1 + coin === amount){
//                        answer[i].forEach( (previous) => {
//                            answer[i + coin].push([...previous,coin])
//                        })


//                     }
//                 })
//             } 
//             // coins.forEach(coin => {
//             //     if (coin === amount) {
//             //         answer[i+coin].push(coin)
//             //     }
//             // })
//         }
//         coins.forEach(coin => {
//             if (coin === amount) {
//                 answer[amount-1].push([coin])
//             }
//         })
        
//     }
    
//     for(let i = 1; i <= amount; i++){
//         adder(i)
//     }

   
//     if(answer[amount - 1].length===0 ) return -1
//     return Math.min(...answer[amount-1].map( ele => ele.length))
   
      
// };


var coinChange = function (coins, amount) {
    if (amount === 0) return 0
    if (Math.min(...coins) > amount) return -1

    let answer =  Array(amount+1).fill(Infinity)
    answer[0] = 0 // 0 coins to get to 0$
    for (let i = 1; i < amount+1; i++) {
        coins.forEach(coin => {
            if (i  - coin >= 0 ) {
                answer[i] = Math.min(answer[i - coin] + 1, answer[i] ) // either current answer or (where im at without the coin)+ 1
                //if a coin can fit in between me and getting to this $ amount THEN set that coin or dont 
            }
        })
    }
    

    if (answer[amount] === Infinity) return -1
    return answer[amount]
};




// console.time(`coinChange([470, 35, 120, 81, 121],
//     9825)`);


// console.log(coinChange([470, 35, 120, 81, 121],
//     9825))
// console.timeEnd(`coinChange([470, 35, 120, 81, 121],
//     9825)`);


