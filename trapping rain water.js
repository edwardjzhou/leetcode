// 42. Trapping Rain Water
// Hard

// 5800

// 105

// Add to List

// Share
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

// Example:

// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Accepted
// 440,657
// Submissions
// 937,672


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftmax = 0;
    let rightmax = 0;
    let answer = 0;
    while (left < right){
        if (height[left] <= height[right]){ // guaranteed to be bounded by right pointer, so move left pointer
            if (height[left] >= leftmax){ // leftmax is currently left bounding top of water
                leftmax = height[left];
            }else{
                answer += leftmax - height[left]; // only when the current pointer is shorter than leftmax is there water storage; incidentally, it is guaranteed by the right pointer being greater than the current pointer
            }
            left++;
        } else{ // guaranteed to be bounded by left, so move right pointer
           if (height[right] >= rightmax) {
               rightmax = height[right];
            }else{ 
                answer += rightmax - height[right];
           }
            right--;            
        }
    }
    return answer
    
    
};