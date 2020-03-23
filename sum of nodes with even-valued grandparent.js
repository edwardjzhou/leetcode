// 1315. Sum of Nodes with Even-Valued Grandparent
// Medium

// 218

// 8

// Add to List

// Share
// Given a binary tree, return the sum of values of nodes with even-valued grandparent.  (A grandparent of a node is the parent of its parent, if it exists.)

// If there are no nodes with an even-valued grandparent, return 0.

 

// Example 1:



// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 18
// Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
 

// Constraints:

// The number of nodes in the tree is between 1 and 10^4.
// The value of nodes is between 1 and 100.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//someone elses genius solution
// insight: just dfs everything and in every frame they have knowledge of parent AND grandparent AND add to the original frame in the return with fancy math

function sumEvenGrandparent(root, parent=1, grandparent=1){
    if(!root) return 0
    if (root){
        return sumEvenGrandparent(root.left, root.val, parent) 
            + sumEvenGrandparent(root.right, root.val, parent) 
            + (1-grandparent % 2) *root.val
    }
    
}