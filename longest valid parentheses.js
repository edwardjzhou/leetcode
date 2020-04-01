// 32. Longest Valid Parentheses
// Hard

// 2916

// 125

// Add to List

// Share
// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// Example 1:

// Input: "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()"
// Example 2:

// Input: ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()"

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {

    const stack = []
    let answer = ""
    let left = -1
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" ) {
            stack.push(i)
        }
        else if (stack.length === 0) {
            left = i
        } else {
            stack.pop()
            if (stack.length === 0){
                answer =  Math.max(answer, i-left)
            } else {
                answer = Math.max(answer, i - stack[stack.length-1])        
            }
            
        }
    }
    return answer
};

