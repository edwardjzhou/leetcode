// 1143. Longest Common Subsequence
// Medium

// 662

// 11

// Add to List

// Share
// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

 

// If there is no common subsequence, return 0.

 

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.
 

// Constraints:

// 1 <= text1.length <= 1000
// 1 <= text2.length <= 1000
// The input strings consist of lowercase English characters only.
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

//lets do brutality version first where we just recurse through the options of ON or OFF for each char in both strs?
// copying tushar roy https://www.youtube.com/watch?v=NnD96abizww

// bottom up memoized matrix
// var longestCommonSubsequence = function(text1, text2) {
//     let dp = Array(text1.length + 1).fill(null).map(()=>Array(text2.length + 1).fill(0))
    
//     for (let i =  1; i <= text1.length; i++){
//         for (let j = 1; j <= text2.length; j++){
//             if (text1[i-1] === text2[j-1]){
//                 dp[i][j] = dp[i-1][j-1] + 1
//             } else {
//                 dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) 
//             }
//         }
//     }
//     console.log(dp)
//     return dp[text1.length][text2.length]
// };

// topdown memoized matrix w recursion
function longestCommonSubsequence(text1,text2){
    let dp = Array(text1.length + 1).fill(null).map(()=>Array(text2.length + 1).fill(null))
    return topdown(text1.length, text2.length)
    function topdown(i, j){
        if (i <= 0 || j <= 0) return 0;
        if (dp[i][j] != null) return dp[i][j];
        if (text1[i - 1] == text2[j - 1]) return 1 + topdown(i - 1, j - 1);
        else return dp[i][j] = Math.max(topdown(i, j - 1), topdown(i - 1, j));
    }
    
}

