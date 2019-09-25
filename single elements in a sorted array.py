# 540. Single Element in a Sorted Array
# Medium

# 871

# 64

# Favorite

# Share
# You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

 

# Example 1:

# Input: [1,1,2,3,3,4,4,8,8]
# Output: 2
# Example 2:

# Input: [3,3,7,7,10,11,11]
# Output: 10
 

# Note: Your solution should run in O(log n) time and O(1) space.

# too many sliced arrays being created so bottom 7.7% in memory top 73% runspeed


class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:

        if len(nums)==1:
            return nums[0]
        mid=int((len(nums)-1)/2)

        if nums[mid]==nums[mid-1] and mid%2 == 0:
            #print("it must be on left side")
            return self.singleNonDuplicate(nums[0:mid-1])
        if nums[mid]==nums[mid-1] and mid%2 != 0:
            #print("it must be on right side")
            return self.singleNonDuplicate(nums[mid+1::])
        if nums[mid]==nums[mid+1] and mid%2 != 0:
            #print("it must be on left side")
            return self.singleNonDuplicate(nums[0:mid])
        if nums[mid]==nums[mid+1] and mid%2 == 0:
            #print("it must be on right side")
            return self.singleNonDuplicate(nums[mid+2::])
        return nums[mid]


