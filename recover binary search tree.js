// 99. Recover Binary Search Tree
// Hard

// 1253

// 66

// Add to List

// Share
// Two elements of a binary search tree (BST) are swapped by mistake.

// Recover the tree without changing its structure.

// Example 1:

// Input: [1,3,null,null,2]

//    1
//   /
//  3
//   \
//    2

// Output: [3,1,null,null,2]

//    3
//   /
//  1
//   \
//    2
// Example 2:

// Input: [3,1,4,null,null,2]

//   3
//  / \
// 1   4
//    /
//   2

// Output: [2,1,4,null,null,3]

//   2
//  / \
// 1   4
//    /
//   3
// Follow up:

// A solution using O(n) space is pretty straight forward.
// Could you devise a constant space solution?
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
//pretend [3, 1, 5, 0, 2, 4, 6]

//    .  3
//   1       5
// 0.  2   4   6 

   
// pretend the case is [1,3, 5,0,2,4,6]

// BRAIN BENDING EVEN THOUGH I ALREADY KNEW HOW TO DO PREORDER TRAVERSAL
// CNA ALWAYS BEOMCE MORE PROFOUND 
// once youve done your duty as a POTENTIAL left holder 
// you finally can become a previous for your parent unless your a right you beocme a previous for your grandparent
var recoverTree = function(root) {
    let first = null
    let second = null
    let previous = new TreeNode(-Infinity)
    dfs(root)
    function dfs(node){
        // console.log(node ? node.val : null)
        if(!node) return
        dfs(node.left) 
        
        if (first===null && previous.val > node.val) {
            first = previous
        }
        
        if (first !== null && previous.val > node.val) {
            second = node
        }
        // console.log(first)
        console.log(previous.val, node.val)
        previous = node
        dfs(node.right)
        
    }
    [second.val, first.val] = [first.val, second.val]
};