
// 17. Letter Combinations of a Phone Number
// Medium

// 3254

// 369

// Add to List

// Share
// Given a string containing digits from 2 - 9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters(just like on the telephone buttons) is given below.Note that 1 does not map to any letters.



//     Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
//     Note:

// Although the above answer is in lexicographical order, your answer could be in any order you want.
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let answer = []
    let combos = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    let currentlength = 1
    let tempanswer = []
    let holder = []

    for (let i = 0; i < digits.length; i++) { // "0 THEN 1"
        if (answer.length !== 0) {
            for (let j = 0; j < combos[digits[i]].length; j++) {
                holder = holder.concat(answer.map(ele =>
                    ele + combos[digits[i]][j]
                )
                )
            }
            answer = holder
            holder = []
        }

        if (answer.length === 0) answer = combos[digits[i]].split('')



    }

    console.log(answer)
    return answer
};

letterCombinations("23401")
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].


