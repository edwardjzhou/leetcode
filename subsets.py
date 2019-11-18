# 78. Subsets
# Medium

# 2551

# 62

# Favorite

# Share
# Given a set of distinct integers, nums, return all possible subsets (the power set).

# Note: The solution set must not contain duplicate subsets.

# Example:

# Input: nums = [1,2,3]
# Output:
# [
#   [3],
#   [1],
#   [2],
#   [1,2,3],
#   [1,3],
#   [2,3],
#   [1,2],
#   []
# ]

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        if len(nums) == 0:
            return [[]] 
    
        subs = self.subsets(nums[0:-1])
        return subs + list(map(lambda x: x + [nums[-1]], subs))

    
   # Runtime: 32 ms, faster than 95.32% of Python3 online submissions for Subsets.
