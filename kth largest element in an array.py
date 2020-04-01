# 215. Kth Largest Element in an Array
# Medium

# 3114

# 219

# Add to List

# Share
# Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

# Example 1:

# Input: [3,2,1,5,6,4] and k = 2
# Output: 5
# Example 2:

# Input: [3,2,3,1,2,4,5,5,6] and k = 4
# Output: 4
# Note:
# You may assume k is always valid, 1 ≤ k ≤ array's length.


# this was incredibly difficult dealing with a randomized pivot and not swapping itself around
# huge variations in runtime still depending on random pivot?
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        targetindex = len(nums) - k
        
 
        def partition(left, right):
            counter = left
            pivotindex = random.randint(left, right-1)
            pivot = nums[pivotindex]

            for i in range(left, right):
                if pivot > nums[i]:
                    if pivotindex == counter:
                        pivotindex = i
                    nums[i], nums[counter] = nums[counter], nums[i]
                    counter += 1
            nums[pivotindex], nums[counter] = nums[counter], nums[pivotindex]
  
            if counter == targetindex:
                return nums[counter]
            elif counter > targetindex:
                return partition(0, counter)
            elif counter < targetindex:
                return partition(counter + 1, len(nums))

        return partition(0, len(nums))

