// 680. Valid Palindrome II
// Easy

// 1454

// 96

// Add to List

// Share
// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.
// Note:
// The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
/**
 * @param {string} s
 * @return {boolean}
 */


var validPalindrome = function(s, flag = false) {
    const array = []
    
    for (let char of s) {
        let ascii = char.toLowerCase().charCodeAt()
        if (ascii >= 97 && ascii <= 122 )
        array.push(ascii)
    }

    let left = 0
    let right = array.length - 1 
    while (left < right) {
        if (flag === false && array[left] !== array[right]  ) {
            flag = true
            return validPalindrome(s.slice(0,left) + s.slice(left+1), flag ) || validPalindrome(s.slice(0,right) + s.slice(right+1) ,flag)
        } else if (flag === true && array[left] !== array[right] ) {
            return false
        }
            
        left++
        right--
    }
    return true
        
    
    
};