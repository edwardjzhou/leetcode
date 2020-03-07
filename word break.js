// 139. Word Break
// Medium

// 3475

// 189

// Add to List

// Share
// Given a non - empty string s and a dictionary wordDict containing a list of non - empty words, determine if s can be segmented into a space - separated sequence of one or more dictionary words.

//     Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
//     Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
//     Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// MY FIRST EVER DYNAMIC PROGRAMMING QUESTION I'VE DONE! SO EXCITING AND GREAT INTRO TO IT :)
var wordBreak = function(s, wordDict) {
    let canGetHere = []
    for(let i = 0; i < s.length; i++){
        canGetHere.push(false)
    }
    
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < wordDict.length; j++){
            if(   (i === 0 && wordDict[j] === s.slice(i, i + wordDict[j].length))    ){
                canGetHere[i+ wordDict[j].length -1] = true
            }
            if( canGetHere[i] === true && wordDict[j] === s.slice(i+1, i + wordDict[j].length + 1)){  // i = 3 true "T"
                canGetHere[i + wordDict[j].length ] = true

            }
        }
    }
    // return canGetHere
    return canGetHere[s.length-1]
};

console.log(wordBreak("leetcode",["leet","code"]))

console.log(wordBreak("catsandog",["cats", "dog", "sand", "and", "cat"]))