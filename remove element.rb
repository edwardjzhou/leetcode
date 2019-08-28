#Given nums = [3,2,2,3], val = 3,

#Your function should return length = 2, with the first two elements of nums being 2.

def remove_element(nums, val)
    i=0
    j=0

    while i < nums.length
	    while nums[j] == val
	    	j+=1
	    end


	    nums[i]=nums[j]
	    i+=1
	   	j+=1
	end

	return nums.select{|ele| ele != nil}.length
end

p remove_element([3,1,2,3],3)

p remove_element([ 2, 2, 0,2,2,3,0,4,2,2,5,2], 2)
