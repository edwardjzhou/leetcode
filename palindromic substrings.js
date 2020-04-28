// 647. Palindromic Substrings
// Medium

// 2216

// 103

// Add to List

// Share
// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

//     Example 1:

// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".


//     Example 2:

// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".


//     Note:

// The input string length won't exceed 1000.

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let answer = 0


    for (let i = 0; i < s.length; i++) {
        let count = 1

        let start = i
        let end = i + 1
        while (start >= 0 && end < s.length && s[start] === s[end]) {
            count++
            start--
            end++
        }

        start = i - 1
        end = i + 1
        while (start >= 0 && end < s.length && s[start] === s[end]) {
            count++
            start--
            end++
        }

        answer += count
    }
    return answer
};

