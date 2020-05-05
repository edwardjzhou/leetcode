// 345. Reverse Vowels of a String
// Easy

// 600

// 1043

// Add to List

// Share
// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:

// Input: "hello"
// Output: "holle"
// Example 2:

// Input: "leetcode"
// Output: "leotcede"
// Note:
// The vowels does not include the letter "y".
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = "aeiouAEIOU"    
    let left = 0
    let right = s.length - 1
    const answer = s.split("")
    
    while (left < right) {
        
        while (!vowels.includes(s[left]) && left < s.length - 1) {
            left++
        }
        
        while (!vowels.includes(s[right]) && right > 0) {
            right--
        }
        
        if (left >= right) break
        [answer[right],answer[left]] = [answer[left],answer[right]]
        
        left++
        right--
    }
    
    return answer.join("")
    
};