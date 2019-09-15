# 1042. Flower Planting With No Adjacent
# Easy

# 116

# 144

# Favorite

# Share
# You have N gardens, labelled 1 to N.  In each garden, you want to plant one of 4 types of flowers.

# paths[i] = [x, y] describes the existence of a bidirectional path from garden x to garden y.

# Also, there is no garden that has more than 3 paths coming into or leaving it.

# Your task is to choose a flower type for each garden such that, for any two gardens connected by a path, they have different types of flowers.

# Return any such a choice as an array answer, where answer[i] is the type of flower planted in the (i+1)-th garden.  The flower types are denoted 1, 2, 3, or 4.  It is guaranteed an answer exists.

 

# Example 1:

# Input: N = 3, paths = [[1,2],[2,3],[3,1]]
# Output: [1,2,3]
# Example 2:

# Input: N = 4, paths = [[1,2],[3,4]]
# Output: [1,2,1,2]
# Example 3:

# Input: N = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
# Output: [1,2,3,4]


# Input: N = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]



# My brute force is:  from garden 1 to garden n 
# the flower type of current garden is the first element of the still-allowed flower types array of this current garden
# then find all gardens higher than current garden that it's connected to
# delete from their still-allowed flower types array, if it exists, the current garden's flower type
# difficult for me to understand others' answers using something called graph coloring / painting
# need to learn how to traverse graphs?

def garden_no_adj(n, paths)

	if n < 5
		answer=[]
		(1..n).each {|ele| answer.push(ele)}
		return answer
	end

	connections=Hash.new(Array.new)
	answer=[1]
	paths.each do |ele|
		connections[ele.min]=connections[ele.min]+[ele.max]
	end

	i=0
	valid_flowertype={}
	(1..n).each {|ele| valid_flowertype[ele]=[1,2,3,4]} #pitfall: I thought incorrectly that valid_flowertype=Hash.new([1,2,3,4]) would work

	while i < n
		answer[i]=valid_flowertype[i+1][0]
		connections[i+1].each do |ele|
			valid_flowertype[ele].delete(answer[i])
		end	

	 	i+=1
	end
	

	return answer
end

p garden_no_adj(5, [[3,4],[4,5],[3,2],[5,1],[1,3],[4,2]])