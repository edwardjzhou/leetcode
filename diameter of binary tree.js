
// 543. Diameter of Binary Tree
// Easy

// 2567

// 161

// Add to List

// Share
// Given a binary tree, you need to compute the length of the diameter of the tree.The diameter of a binary tree is the length of the longest path between any two nodes in a tree.This path may or may not pass through the root.

//     Example:
// Given a binary tree
// 1
//     / \
// 2   3
//     / \
// 4   5
// Return 3, which is the length of the path[4, 2, 1, 3] or[5, 2, 1, 3].

//     Note: The length of path between two nodes is represented by the number of edges between them.
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
// let left
// this breaks code maybe because a right child node's left variable will overwrite its parents already calculated
// left variable
// let right

// let answer
// even this breaks code since its remembered beyond a call of diameterofbinarytree()
// took forever despite getting teh solution because of scoping problems 
var diameterOfBinaryTree = function(root) {
    let answer = 0
    dfs(root)
    
    function dfs(node){
        if (!node) return 0
        let left = dfs(node.left) 
        let right = dfs(node.right) 
        answer = Math.max(answer, left + right) 
        console.log(answer)
        return (Math.max(left, right) + 1)
    }
    return answer
};

        
//         const left = dfs(node.left);
//         const right = dfs(node.right);
        
//         // update diameter at every node
//         diameter = Math.max(diameter, left + right);

//         // update the largest number of edge so far
//         return 1 + Math.max(left, right);
//     }
// };