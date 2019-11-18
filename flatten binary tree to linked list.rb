# 114. Flatten Binary Tree to Linked List
# Medium

# 1921

# 248

# Favorite

# Share
# Given a binary tree, flatten it to a linked list in-place.

# For example, given the following tree:

#     1
#    / \
#   2   5
#  / \   \
# 3   4   6
# The flattened tree should look like:

# 1
#  \
#   2
#    \
#     3
#      \
#       4
#        \
#         5
#          \
#           6
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @return {Void} Do not return anything, modify root in-place instead.
# me: looks like DFS style with LIFO
def flatten(root) 
    return nil if root == nil
    stack = [root]
    answers = []
    while stack.length != 0
        temp = stack.shift
        if temp.right != nil
            stack.unshift(temp.right)
        end
        if temp.left != nil
            stack.unshift(temp.left)
        end
        answers.push(temp)
    end
    
    i = 0
    while i < answers.length - 1
        answers[i].right = answers[i+1]
        answers[i].left = nil
        i += 1
    end
    answers[-1].left = nil
    answers[-1].right = nil

end