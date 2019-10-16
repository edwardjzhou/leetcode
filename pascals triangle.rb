# 118. Pascal's Triangle
# Easy

# 879

# 84

# Favorite

# Share
# Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


# In Pascal's triangle, each number is the sum of the two numbers directly above it.

# Example:

# Input: 5
# Output:
# [
#      [1],
#     [1,1],
#    [1,2,1],
#   [1,3,3,1],
#  [1,4,6,4,1]
# ]
# @param {Integer} num_rows
# @return {Integer[][]}
def generate(n)
    arr = []
    i = 1
    while i <= n
        arr1 = Array.new(i, 1)
        if i > 2
            arr[i-2].each_with_index do |ele,idx|
                if idx <= arr[i-2].length-2
                    arr1[idx+1] = arr[i-2][idx] + arr[i-2][idx+1]
                end    
            end
        end
        arr << arr1
        i += 1 
    end
    arr
end