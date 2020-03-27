5. Longest Palindromic Substring
Medium

5796

484

Add to List

Share
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
/**
 * @param {string} s
 * @return {string}
 */

// abcxcba
// abccba

//genius someone elses answer
function longestPalindrome(s){
    let left
    let right
    let answer = ""
    for (let i = 0; i < s.length; i++) {
        for (let j of [0, 1]) {
            left = i
            right = i + j
            while (left >= 0 && s[left] === s[right]){
                left--
                right++
            }
            //overshot by 1 on both left and right -1 7
            if (right - left - 1 > answer.length ){
                answer = s.substring(left+1, right)
            }
        }
        if (answer.length > (s.length - i) * 2) break
    }
    return answer
}
    
//someoone elses
// var longestPalindrome = function(s) {
//     let length = s.length;
//     let answer = ""
//     const dp = Array(s.length).fill(null).map(()=> Array(s.length).fill(0))
//     //"aa" i=1 j =1 j =2 i=0 j =0 j=1
//   for (let i = length - 1; i >= 0; i--){
//     for (let j = i; j < length; j++){
//       dp[i][j] = s[i] == s[j] && (j - i < 3 || dp[i + 1][j - 1]);
//             console.log(dp)
//       if (dp[i][j] && (answer == null || j - i + 1 > answer.length)){
//         answer = s.slice(i, j + 1)
//           console.log(answer)
//       }
      
//     }
//   }
//     // console.log(dp)
    
//   return answer
// }
