// 925. Long Pressed Name
// Easy

// 440

// 57

// Add to List

// Share
// Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

 

// Example 1:

// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.
// Example 2:

// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
// Example 3:

// Input: name = "leelee", typed = "lleeelee"
// Output: true
// Example 4:

// Input: name = "laiden", typed = "laiden"
// Output: true
// Explanation: It's not necessary to long press any character.
 

// Note:

// name.length <= 1000
// typed.length <= 1000
// The characters of name and typed are lowercase letters.
 
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
// alex, aaleex
// copied https://leetcode.com/problems/long-pressed-name/discuss/183994/C%2B%2BJavaPython-Two-Pointers
// var isLongPressedName = function(name, typed) {
//     let j = 0
//     for (let i = 0; i < typed.length; i++){
//         if (j < name.length && name[j] === typed[i]){
//             j++ //move name along name = l
//         }else if(i===0 || typed[i] !== typed[i-1]){
//             return false         
//         }
//     }
//     return j === name.length
// };


function isLongPressedName(name, typed){
    let pointer = 0
    for (let i = 0; i < typed.length; i++){
        if (typed[i] !== name[pointer] && typed[i] !== typed[i-1]) return false 
        // because typed deigned to change letters AND still not match, it fails
        if (typed[i] === name[pointer]) pointer++
        if (pointer === name.length) return true
    }
    return false
    
}