
// 125. Valid Palindrome
// Easy

// 1085

// 2762

// Add to List

// Share
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const array = []
    for (let char of s) {
        ascii = char.toLowerCase().charCodeAt()
        if (ascii >= 97 && ascii <= 122 || ascii >= 48 && ascii <= 57)
        array.push(ascii)
    }

    let left = 0
    let right = array.length - 1 
    while (left < right) {
        if (array[left] !== array[right]) return false
        left++
        right--
    }
    return true
        
    
    
};