// 135. Candy
// Hard

// 754

// 149

// Add to List

// Share
// There are N children standing in a line. Each child is assigned a rating value.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// What is the minimum candies you must give?

// Example 1:

// Input: [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
// Example 2:

// Input: [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
//              The third child gets 1 candy because it satisfies the above two conditions.

/**
 * @param {number[]} ratings
 * @return {number}
 */

// bubblesort version n^2 time, n memory; previously was trying to use bellman ford hilariously impossible
// will do it the one-pass way once i buy a new notepad becasue i have no paper and im not doing it without paper
var candy = function(ratings) {
    let finished = false
    let answer = Array(ratings.length).fill(1)
    while (!finished){
        finished = true
        for (let i = 1; i < ratings.length; i++) {
            if (ratings[i] > ratings[i-1] && answer[i] <= answer[i-1]) {
                answer[i] = answer[i-1] + 1
                finished = false
            }
            if (ratings[i] < ratings[i-1] && answer[i] >= answer[i-1]){
                answer[i-1] += 1
                finished = false
            }
        }
    }
    return answer.reduce( (acc, ele)=> acc+ele)
    
}