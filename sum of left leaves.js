// 404. Sum of Left Leaves
// Easy

// 1034

// 118

// Add to List

// Share
// Find the sum of all left leaves in a given binary tree.

// Example:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// errors:
// 1. it's val not value 
// 2. only things at the very end are leaves not all left branches

// note: NO CHILDREN then you are a leaf

var sumOfLeftLeaves = function(root, amLeft=false) {
    if (!root) return 0
    const left = sumOfLeftLeaves(root.left, true)
    const right = sumOfLeftLeaves(root.right, false)
    if (root.left===null && root.right===null && amLeft) return root.val // if youre a leaf return yourself
    else return left+right // you're an intermediary guaranteed so just return everyone that is acutally a left leaf
};