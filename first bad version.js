// 278. First Bad Version
// Easy

// 1014

// 572

// Add to List

// Share
// You are a product manager and currently leading a team to develop a new product.Unfortunately, the latest version of your product fails the quality check.Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions[1, 2, ..., n]and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which will return whether version is bad.Implement a function to find the first bad version.You should minimize the number of calls to the API.

//     Example:

// Given n = 5, and version = 4 is the first bad version.

// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true

// Then 4 is the first bad version. 
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    // [1,2,3,4,5] // mid = 3 start = 4 mid = 4 end = 4

    // had to change end > start to end-start!==1 in while
    //had to use parseint rather than >> 1 because i bet javascript knows its guaranteed type of integer as a result
    //had to set start =0 not start =1
    //dislike time tests and infinite whiles because conditional is off by 1
    // do not understand floating point ieee representations with mantissas and exponents
    return function (n) {
        let start = 0
        let end = n
        let mid
        while (end - start !== 1) {
            mid = parseInt((start + end) / 2)
            if (isBadVersion(mid)) {
                end = mid
            } else {
                start = mid
            }
        }
        return end


    };
};
