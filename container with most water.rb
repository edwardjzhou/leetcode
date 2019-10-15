# 11. Container With Most Water
# Medium

# 4078

# 479

# Favorite

# Share
# Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

# Note: You may not slant the container and n is at least 2.

 



# The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

 

# Example:

# Input: [1,8,6,2,5,4,8,3,7]
# Output: 49


def max_area(height)
    i = 0
    j = height.length - 1
    answer = 0
    while i < j

    	area = (j-i) * [height[i],height[j]].min
    	if area > answer
    		answer = area
    	end

    	if height[i] <= height[j]
    		i += 1
    	elsif height[j] < height[i]
    		j -= 1
    	end
    end
    return answer
end


p max_area(height=[1,8,6,2,5,4,8,3,7])