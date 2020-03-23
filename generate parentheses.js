// 22. Generate Parentheses
// Medium

// 4286

// 234

// Add to List

// Share
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]
//https://leetcode.com/problems/generate-parentheses/discuss/10100/Easy-to-understand-Java-backtracking-solution
var generateParenthesis = function (n) {
    let answers = []
    perms(n, n, "", 0);
    return answers

    function perms(open, close, answer, index) {
        if (close === 0 && open === 0 ) {
            answers.push(answer)
            return true
        }
        if (open > 0 && close >= open) {
            perms(open - 1, close, answer + "(", index + 1)
        }
        if (close > 0) {
            perms(open, close - 1, answer + ")", index + 1, answer)
        }
    }

};
