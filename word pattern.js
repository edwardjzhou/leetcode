// 290. Word Pattern
// Easy

// 922

// 127

// Add to List

// Share
// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non - empty word in str.

//     Example 1:

// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", str = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    let hash = {}
    let words = str.split(" ")
    if (words.length !== pattern.length) return false
    console.log(words)
    for (let i = 0; i < pattern.length; i++) {
        if (!hash[pattern[i]]) {
            if (Object.values(hash).includes(words[i])) return false
            hash[pattern[i]] = words[i]
        } else if (hash[pattern[i]] !== words[i]) {
            return false
        }

    }

    return true
};