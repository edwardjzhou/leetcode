438. Find All Anagrams in a String
Medium

2384

162

Add to List

Share
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const answer = []
    const hash = {}
    const length = p.length
    for (let letter of p) {
        hash[letter]  ? hash[letter]++ : hash[letter] = 1
    }
    
    const window = {}
    
    
    //start a window
    for (let i = 0; i < length; i++) {
        window[s[i]] ? window[s[i]]++ : window[s[i]] = 1
    }
    
    let previous
    let next
    let flag = true
    
    for (let i = 0; i <= s.length - length; i++) {
        for (let key in hash) {
            if (window[key] !== hash[key] ) {
                flag = false
                break
            }
        }
        
        if (flag) answer.push(i)
        flag = true
        next = s[i + length ]
        previous = s[i]
        window[previous]--
        window[next] ? window[next]++ : window[next] = 1
        
    }
    return answer
};