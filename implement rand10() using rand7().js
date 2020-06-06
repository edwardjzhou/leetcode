// 470. Implement Rand10() Using Rand7()
// Medium

// 393

// 126

// Add to List

// Share
// Given a function rand7 which generates a uniform random integer in the range 1 to 7, write a function rand10 which generates a uniform random integer in the range 1 to 10.

// Do NOT use system's Math.random().

 

// Example 1:

// Input: 1
// Output: [7]
// Example 2:

// Input: 2
// Output: [8,4]
// Example 3:

// Input: 3
// Output: [8,1,10]
 

// Note:

// rand7 is predefined.
// Each testcase has one argument: n, the number of times that rand10 is called.
 

// Follow up:

// What is the expected value for the number of calls to rand7() function?
// Could you minimize the number of calls to rand7()?
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
// [bucket1, bucket2] each bucket is independently 1-7 so there are 49 permutations
// how do we map 49 combos to 10? though
// discard last 9 permutations sot here are 40 permutations and now each of 1-10 has a 4/40 chance of being selected?

// (1,1) is 1; (1,2) is 2; (1,7) is 7
// (2,1) is 8; (2,2) is 9; (2,3) is 10; (2,4) is 1;
// formula is  ( (x-1)*7 + y ) % 10 except when its 0 in that case its 10


//(6,5 ) is last valid which is 40 %10 which is 0 which is changed to 10
// (6, 6-7); (7, 1-7) are dropped rerolls

//mistakes were not rerolling entirely upon getting a roll1=6 and roll2=6 or 7
// i just rerolled roll2 but then its unfair obviously since 6,1-5 get more hits than say 5,1-7
var rand10 = function() {
    let roll1 = rand7()
    let roll2 = rand7()
    
    while ( roll1 === 7 || (roll1 === 6 && (roll2 === 6 || roll2 === 7) ) ) {
        roll1 = rand7()
        roll2 = rand7()
    }
    
    let answer = ((roll1-1)*7 + roll2 ) % 10
    return answer === 0 ? 10 : answer
};