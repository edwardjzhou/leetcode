# 344. Reverse String
# Easy

# 870

# 562

# Favorite

# Share
# Write a function that reverses a string. The input string is given as an array of characters char[].

# Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

# You may assume all the characters consist of printable ascii characters.

 

# Example 1:

# Input: ["h","e","l","l","o"]
# Output: ["o","l","l","e","h"]
# Example 2:

# Input: ["H","a","n","n","a","h"]
# Output: ["h","a","n","n","a","H"]

def reverse_string(s)
    i=0
    while i < s.length / 2
    	temp = s[i]
    	s[i] = s[-(i+1)]
    	s[-(i+1)]=temp
    	i+=1
    end
    return s
end

p reverse_string( ["h","e","l","l","o"])
