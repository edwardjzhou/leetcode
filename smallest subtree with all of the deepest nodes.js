// 865. Smallest Subtree with all the Deepest Nodes
// Medium

// 626

// 196

// Add to List

// Share
// Given a binary tree rooted at root, the depth of each node is the shortest distance to the root.

// A node is deepest if it has the largest depth possible among any node in the entire tree.

// The subtree of a node is that node, plus the set of all descendants of that node.

// Return the node with the largest depth such that it contains all the deepest nodes in its subtree.

 
// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {TreeNode}
//  */



// another way was:
// 1. figure out max depth
// 2. for each node see if calling max depth on node would be bigger on right or left
// if no maxdepths or same for both then node is answer
// if left bigger than right then go down left, vice versa

// need find leftmost of the deepoest and then the rightmost of the deepest and then the node thats their lowest ancestor aka middle node between the left and right
var subtreeWithAllDeepest = function(root) {
    if (!root) return root
    const queue = [root]
    let left = null 
    let right = null
    while (queue.length) {
        const length = queue.length
        
        for (let i = 0; i < length; i++) {       
            const current = queue.shift()
            if (i === 0) left = current //leftmost node for this level
            if (i === length-1) right = current //rightmost node for this elvel
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
    }
    
    if (left===right) return left
    
    return lowestCommonAncestor(root, left, right)
        
};


// redux of this old problem 
// we are looking for p node and q node's first common ancestor to return
// exit conditions (there are 2): 1. im one of p or q and one of my (children OR one of its children was p or q), then i am answer
// 2. my two children are (p or p holder) AND (q or q holder)  
// how do i know if child or its children was p or q ? i make a child return true if it is p or q

function lowestCommonAncestor(root, p, q) {
    if (!root) return false

    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
    
    if ( (root == p || root== q) && (left || right)) return root
    else if (root == p || root== q) return true
    else if (left && right ) return root
    // if ( left instanceof TreeNode) return left 
    // if ( right instanceof TreeNode) return right
    else {
        return left || right   
    }
};
