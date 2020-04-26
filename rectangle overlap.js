// 836. Rectangle Overlap
// Easy

// 581

// 113

// Add to List

// Share
// A rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) are the coordinates of its bottom-left corner, and (x2, y2) are the coordinates of its top-right corner.

// Two rectangles overlap if the area of their intersection is positive.  To be clear, two rectangles that only touch at the corner or edges do not overlap.

// Given two (axis-aligned) rectangles, return whether they overlap.

// Example 1:

// Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
// Output: true
// Example 2:

// Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
// Output: false
// Notes:

// Both rectangles rec1 and rec2 are lists of 4 integers.
// All coordinates in rectangles will be between -10^9 and 10^9.
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    // one of my x's has to be between the x's of the other rect
    // AT SAME TIME one of my y's has to between the y's of the other rec
    // too much thinking the smartest way is to boil it down to
    // the rightmost of the lefts sholud be left of the leftmost right 
    // the lowest of the tops should be higher than hte tallest of the bottoms for there to be crossover
    let [leftx1, lefty1, rightx1, righty1] = rec1
    let [leftx2, lefty2, rightx2, righty2] = rec2
    
    return (Math.min(rightx1, rightx2) > Math.max(leftx1, leftx2) ) && 
        (Math.min(righty1,righty2) > Math.max(lefty1,lefty2))
};

