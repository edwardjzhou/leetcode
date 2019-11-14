# 215. Kth Largest Element in an Array
# Medium

# 2589

# 199

# Favorite

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
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}

def find_kth_largest(nums, k)
    quicksort(nums)[-k]
end

def quicksort(nums)
    return nums if nums.length < 2
    pivotindex = rand(0...nums.length)
    pivot = nums[pivotindex]
    left = (nums[0...pivotindex]+nums[pivotindex+1..-1]).select {|ele| ele < pivot}
    right = (nums[0...pivotindex]+nums[pivotindex+1..-1]).select {|ele| ele >= pivot}
    return quicksort(left) + [pivot] + quicksort(right)
end

p find_kth_largest([3,2,3,1,2,4,5,5,6], 4)

#Runtime: 88 ms, faster than 19.84% of Ruby online submissions for Kth Largest Element in an Array.
