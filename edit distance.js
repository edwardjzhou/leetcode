// 72. Edit Distance
// Hard

// 3076

// 45

// Add to List

// Share
// Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

// You have the following 3 operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character
// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// profound insight:
// inserting into word1 is basically moving word2 forward by 1
// deleting from word1 is basically moving word1 forward by 1
// replacing a char in word1 is basicaly moving both word1 and word2 by 1

memo = {}
function minDistance(word1, word2) {
    if (!word1 && !word2) return 0
    if (!word1.length || !word2.length) return word1.length || word2.length
    if (word1[0] === word2[0]) {
        word1 = word1.slice(1)
        word2 = word2.slice(1)
        return minDistance(word1, word2)
    }
    if (!(`${word1}->${word2}` in memo)) {
        memo[`${word1}->${word2}`] =
            Math.min(1 + minDistance(word1.slice(1), word2),
                1 + minDistance(word1, word2.slice(1)),
                1 + minDistance(word1.slice(1), word2.slice(1)))
    }
    return memo[`${word1}->${word2}`]
}

