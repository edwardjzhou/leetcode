// 190. Reverse Bits
// Easy

// 814

// 302

// Add to List

// Share
// Reverse bits of a given 32 bits unsigned integer.



//     Example 1:

// Input: 00000010100101000001111010011100
// Output: 00111001011110000010100101000000
// Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
//     Example 2:

// Input: 11111111111111111111111111111101
// Output: 10111111111111111111111111111111
// Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.


// Note:

// Note that in some languages such as Java, there is no unsigned integer type.In this case, both input and output will be given as signed integer type and should not affect your implementation, as the internal binary representation of the integer is the same whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above the input represents the signed integer -3 and the output represents the signed integer -1073741825.


// Follow up:

// If this function is called many times, how would you optimize it ?
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
    // console.log(parseInt(n,2))
    // n = parseInt(n,2)
    // 11 is 8 2 1   so   1011
    // console.log(n >> 1)  //1011 becomes 101 wwhich is 5
    // console.log(~n) // 1011 becomes 11110100 which is -12 because 12 is 1100   and   011110100 is whats needed to add to it to get to 10000000
    //32 bits we start at the left and bitmask it to see if its a 1'er and add it to teh results
    // console.log(n & 1<<2) // this returns 4 foer some reasson

var reverseBits = function (n) {
    let digits = 32
    let answer = 0

    while (digits != 0) {
        if (n & 1) {
            answer += Math.pow(2, digits - 1)

        }
        n = n >> 1
        digits--
    }
    return answer
};

console.log(reverseBits(00000010100101000001111010011100))

// console.log(reverseBits(101)) 

