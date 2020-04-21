# 437. Path Sum III
# Easy

# 2926

# 225

# Add to List

# Share
# You are given a binary tree in which each node contains an integer value.

# Find the number of paths that sum to a given value.

# The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

# The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

# Example:

# root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

#       10
#      /  \
#     5   -3
#    / \    \
#   3   2   11
#  / \   \
# 3  -2   1

# Return 3. The paths that sum to 8 are:

# 1.  5 -> 3
# 2.  5 -> 2 -> 1
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# namespacing is difficult in python i prefer easier closures 

class Solution:
    # answer = 0
    # def __init__(self):
    #     Solution.answer = 0
    # @classmethod
    
    def pathSum(self, root: TreeNode, sum: int, previous = []) -> int:
        if root is None:
            return 0
        previous = [ ele + root.val for ele in previous] # prevent passing by ref but bottom 6% memory use 
        previous.append(root.val)
        return previous.count(sum) + self.pathSum(root.left, sum, previous) + self.pathSum(root.right, sum, previous)
    
        # can do it in n space if i just remember what i was previously and undo that
        # hash table is better pg 286 of ctci
        # track a running total down this side of the root and subtract our current node from that running total
        # see if thats our target 
    
        # if sum in previous:
        #     Solution.answer += previous.count(sum)
        # self.pathSum(root.left, sum, previous)
        # self.pathSum(root.right, sum, previous)
        # return Solution.answer
