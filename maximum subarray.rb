# 53. Maximum Subarray
# Easy

# 5113

# 197

# Favorite

# Share
# Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

# Example:

# Input: [-2,1,-3,4,-1,2,1,-5,4],
# Output: 6
# Explanation: [4,-1,2,1] has the largest sum = 6.
# Follow up:

# If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

# if you meet a negative value thats bigger than all the pozzes to its left . everything is dead in that branch

def max_sub_array(nums)
    i=0
    rollingsum=0
    best = nums[i]
    nums.each do |ele|
        rollingsum+=ele
        
        if best < rollingsum
			best = rollingsum
		end
        
		if rollingsum < 0 
			rollingsum = 0
		end

		i+=1
	end
	
	return best

end



p max_sub_array([-2,1,-3,4,-1,2,1,-5,4])