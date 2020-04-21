1079. Letter Tile Possibilities
Medium

500

22

Add to List

Share
You have a set of tiles, where each tile has one letter tiles[i] printed on it.  Return the number of possible non-empty sequences of letters you can make.

 

Example 1:

Input: "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "





ABA", "BAA".
Example 2:

Input: "AAABBC"
Output: 188
 

Note:

1 <= tiles.length <= 7
tiles consists of uppercase English letters.

/**
 * @param {string} tiles
 * @return {number}
 */
// ABC
// 3 * 2 * 1 ways to get 3 at a time
// ABB
// 2*1.5*1 ways to get 3 at a time sometimes the second slot has 1 choice seomtiems it has 2
// BBB

// this is all wrong, my combinatorics is too weak
// 1 option taken 3 at a time AAA is AAA AA A 
// ABCDE 5 options so its 5_4_3_2_1
// but if its ABCDD we have 4_4_3_2_1 = 96 4_4_3 = 170

// AAB 3 options taken 2 at a time,  A1B A1A2 BA1 BA2 A2A1 A2B
// ABC 3 options taken 2 at a time AB AC BA BC CA CB
// permutations with some repetition 
// subsets are 2^n becauzsxe each element is either on or off so its binary
// permtuations of n taken r at a time are n!/ (n-r)!
// ABCDE = 5!===120 (5 things taken 5 at a time) + 120(5 things taken 4 at a time) 5 things taken 3 at a time ==60
// 5 things taken 2 at a time == 20 5 things taken 1 at a time == 5  = 325


// n^r n is the choices r is the slots w repetition though theres no repetition here as choices are use dup

var numTilePossibilities = function(tiles) {
    let set = new Set()
    let answer = 0
    // let subsets= []

    
    for (let i = 0; i < tiles.length; i++) {
        dfs(tiles[i], tiles.slice(0, i) + tiles.slice(i + 1, tiles.length))
    }
    
    function dfs(current, remainder){
         if (!set.has(current)) {
                // subsets.push(current)
                answer++
                set.add(current)
        }
        if (remainder.length ===0 ) return
        else {
            for (let i = 0 ; i < remainder.length; i++) {
                dfs(current + remainder[i], remainder.slice(0,i) + remainder.slice(i + 1, remainder.length))
            }
        }

    }
    
    // console.log(subsets, answer)
    return answer
};

