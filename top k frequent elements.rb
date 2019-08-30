# Example 1:

# Input: nums = [1,1,1,2,2,3], k = 2
# Output: [1,2]
# Example 2:

# Input: nums = [1], k = 1
# Output: [1]


def top_k_frequent(nums, k)
    answer=[]
    hash=Hash.new(0)
    nums.each{|ele| hash[ele]+=1}

    
   	#temp=hash.values temp is now an array and then you find the largest value in it then set it = 0 then output the key of that idx and redo
	temp=hash.values #[3,1,1,3]
    while answer.length < k 
    	gonerindex=temp.index(temp.max)
    	temp[gonerindex]=0
    	answer.push(hash.keys[gonerindex])
    end

    
    return answer

end


p top_k_frequent(nums = [1,1,1,2,2,3], k = 2)


