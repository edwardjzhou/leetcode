// 108. Convert Sorted Array to Binary Search Tree
// Easy

// 1886

// 184

// Add to List

// Share
// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted array: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// I think creating a ton of sliced arrays in memory is bad but leetcode says its just as good memorywise as pointers
// I'm also gonna use >>1 rather than Math.floor(num/2) from now on
var sortedArrayToBST = function(nums) {
    if ( nums.length < 1) return null
    let length = nums.length
    const node = new TreeNode(nums[length >> 1])
    node.left = sortedArrayToBST( nums.slice( 0, length >> 1 ) )
    node.right = sortedArrayToBST( nums.slice( (length >> 1) + 1 ) )
    return node
};
