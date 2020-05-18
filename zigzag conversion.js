// 6. ZigZag Conversion
// Medium

// 1554

// 4383

// Add to List

// Share
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

//     P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

//someones "step" answer its clever
// kinda just oscillate back and forth in a pattern like the backwards N from cyrillic
var convert = function(s, numRows) {
    if (numRows === 1) return s 
    
    const answer = Array(numRows).fill("")
    let i = 0
    let step
    
    
    for (const char of s) {
        if (i === 0) step = 1
        if (i === numRows - 1) step = -1
        answer[i] += char
        i += step
    }
    
    return answer.join("")
    
};

